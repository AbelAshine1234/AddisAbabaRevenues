import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AARB_KNOWLEDGE_BASE, KnowledgeChunk } from './knowledge-base';

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);
  private readonly apiKey: string;
  private readonly modelName: string;

  constructor(private readonly config: ConfigService) {
    this.apiKey =
      this.config.get<string>('GEMINI_API_KEY') ||
      process.env.GEMINI_API_KEY || '';
    this.modelName = this.config.get<string>('GEMINI_MODEL') || 'gemini-3.5-flash-lite';
  }

  // RAG: Retrieve the most relevant knowledge chunks
  private retrieveContext(query: string): KnowledgeChunk[] {
    const qLower = query.toLowerCase();
    const scored = AARB_KNOWLEDGE_BASE.map((chunk) => {
      let score = 0;
      for (const kw of chunk.keywords) {
        if (qLower.includes(kw.toLowerCase())) {
          score += 3;
        }
      }
      for (const word of qLower.split(/\s+/)) {
        if (word.length > 2 && chunk.content.toLowerCase().includes(word)) {
          score += 1;
        }
      }
      return { chunk, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.filter((s) => s.score > 0).map((s) => s.chunk).slice(0, 3);
  }

  async processMessage(userMessage: string): Promise<{
    reply: string;
    suggestions: string[];
    citations?: string[];
    timestamp: string;
  }> {
    const relevantChunks = this.retrieveContext(userMessage);
    const contextText =
      relevantChunks.length > 0
        ? relevantChunks
            .map((c) => `[Topic: ${c.topic}]\n${c.content}\nAmharic: ${c.amharicSummary}`)
            .join('\n\n---\n\n')
        : AARB_KNOWLEDGE_BASE.map((c) => `[Topic: ${c.topic}]\n${c.content}`).join('\n\n');

    const systemPrompt = `You are the official Report Assistant AI for the Addis Ababa City Administration Revenues Bureau (የአዲስ አበባ ከተማ አስተዳደር ገቢዎች ቢሮ - AARB).
Your purpose is to assist citizens, taxpayers, and informants in reporting tax evasion, VAT receipt fraud, unregistered businesses, and employee misconduct/bribery confidentially.

Here is verified official bureau knowledge and legal proclamations to ground your answer (RAG Context):
=============================
${contextText}
=============================

Rules:
1. Ground your response firmly in the provided knowledge base and Ethiopian tax proclamations.
2. If the user writes in Amharic, respond in fluent Amharic. If in Afaan Oromoo, respond in Afaan Oromoo. If in English, respond in English.
3. Be respectful, encouraging, and emphasize that informant reports are 100% confidential and protected by law.
4. Keep the answer clear, structured, and under 3-4 concise paragraphs with practical steps.
5. Provide relevant contact info when applicable (Hotline: 8688, Emergency: 911).`;

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.modelName}:generateContent?key=${this.apiKey}`;
      const payload = {
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nUser Question: "${userMessage}"\n\nAssistant Response:`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 800,
        },
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errText = await response.text();
        this.logger.warn(`Gemini API returned error status ${response.status}: ${errText}`);
        return this.fallbackResponse(userMessage, relevantChunks);
      }

      const data = (await response.json()) as any;
      const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!generatedText) {
        return this.fallbackResponse(userMessage, relevantChunks);
      }

      return {
        reply: generatedText.trim(),
        suggestions: this.generateSuggestions(userMessage),
        citations: relevantChunks.map((c) => c.topic),
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      this.logger.error('Failed to generate response with Gemini RAG', error);
      return this.fallbackResponse(userMessage, relevantChunks);
    }
  }

  private generateSuggestions(query: string): string[] {
    const q = query.toLowerCase();
    if (q.includes('vat') || q.includes('receipt') || q.includes('ደረሰኝ')) {
      return ['Attach receipt photo', 'File VAT Report now', 'Check VAT Penalties'];
    }
    if (q.includes('anonymous') || q.includes('safe') || q.includes('ሚስጥር')) {
      return ['Submit anonymous report', 'Whistleblower Reward policy', 'Track active case'];
    }
    if (q.includes('misconduct') || q.includes('bribe') || q.includes('ጉቦ')) {
      return ['Report officer bribery', 'Ethics Directorate hotline', 'Submit confidential tip'];
    }
    return ['Report VAT Evasion', 'Track Active Report', 'Whistleblower Protections', 'Call 8688 Hotline'];
  }

  private fallbackResponse(
    query: string,
    chunks: KnowledgeChunk[],
  ): {
    reply: string;
    suggestions: string[];
    citations?: string[];
    timestamp: string;
  } {
    if (chunks.length > 0) {
      const top = chunks[0];
      return {
        reply: `${top.content}\n\nለበለጠ መረጃ እና አቤቱታ በነፃ የስልክ መስመር 8688 ይደውሉ።`,
        suggestions: this.generateSuggestions(query),
        citations: [top.topic],
        timestamp: new Date().toISOString(),
      };
    }

    return {
      reply:
        'እንኳን ወደ አዲስ አበባ ከተማ አስተዳደር ገቢዎች ቢሮ ሪፖርት ረዳት በደህና መጡ። የቫት ደረሰኝ አለመስጠት፣ ህገወጥ ንግድ ወይም የሰራተኞች ስነምግባር ጉድለትን በተመለከተ ጥቆማ መስጠት ይችላሉ። በስልክ 8688 መደወል ይቻላል።',
      suggestions: ['Report VAT Evasion', 'Track Report', 'Whistleblower Protections'],
      timestamp: new Date().toISOString(),
    };
  }
}
