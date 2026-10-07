import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  processMessage(userMessage: string) {
    const text = userMessage.toLowerCase();
    let reply = '';
    const suggestions: string[] = [];

    if (text.includes('vat') || text.includes('receipt') || text.includes('cash register')) {
      reply =
        'Under the Federal Tax Administration Proclamation and Addis Ababa City regulations, all registered businesses must issue fiscal cash register sales receipts for every transaction. Refusing to issue a receipt carries severe financial penalties and business license suspension. You can submit an anonymous report with a photo of your pre-bill or business signage.';
      suggestions.push('How to attach photo proof', 'File a VAT report now', 'Call 8688 Hotline');
    } else if (text.includes('anonymous') || text.includes('protect') || text.includes('safe') || text.includes('identity')) {
      reply =
        'Your identity is completely protected. When you file with "Report anonymously" turned ON, neither your name, phone number, nor device identifiers are stored or shared with field inspectors.';
      suggestions.push('Submit anonymous report', 'Check report status');
    } else if (text.includes('track') || text.includes('status') || text.includes('reference')) {
      reply =
        'You can track your case progress anytime using your Case Reference Number (e.g. ARB-2024-00142) in the "Track My Report" screen. You will see timeline milestones from receipt to investigation and resolution.';
      suggestions.push('Track my report', 'Contact Investigator');
    } else if (text.includes('bribe') || text.includes('misconduct') || text.includes('corruption') || text.includes('employee')) {
      reply =
        'The Addis Ababa Revenues Bureau maintains a zero-tolerance policy regarding bribery, extortion, or unprofessional conduct by tax assessment officers. Reports filed under "Employee Misconduct" are immediately routed to the Ethics and Anti-Corruption Directorate.';
      suggestions.push('Report employee misconduct', 'Direct call to Bureau Ethics');
    } else {
      reply =
        'Welcome to the Addis Ababa Revenues Bureau (AARB) Report Assistant AI. I can assist you with tax compliance procedures, confidential whistleblowing guidelines, and tracking your filed reports. For direct agent support, you can also dial hotline 8688.';
      suggestions.push('Report VAT Evasion', 'Track Active Report', 'Whistleblower Protections');
    }

    return {
      reply,
      suggestions,
      timestamp: new Date().toISOString(),
    };
  }
}
