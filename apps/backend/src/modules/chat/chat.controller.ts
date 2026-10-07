import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { ChatService } from './chat.service';

class ChatMessageDto {
  @ApiProperty({ example: 'How do I report VAT evasion anonymously?' })
  @IsString()
  @IsNotEmpty()
  message: string;
}

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('message')
  @ApiOperation({ summary: 'Send message to AARB Report Assistant AI' })
  sendMessage(@Body() dto: ChatMessageDto) {
    return this.chatService.processMessage(dto.message);
  }
}
