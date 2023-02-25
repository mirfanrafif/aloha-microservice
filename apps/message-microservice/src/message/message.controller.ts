import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WablasSendMessageRequest } from '@aloha/message-library/wablas.dto';
import { WablasService } from '../core/wablas/wablas.service';

@Controller('message')
export class MessageController {
  constructor(private wablasService: WablasService) {}

  @MessagePattern('wablas_send_message')
  sendMessageToWablas(@Payload() data: WablasSendMessageRequest) {
    console.log('data', data);
    return this.wablasService.sendMessage(data);
  }
}
