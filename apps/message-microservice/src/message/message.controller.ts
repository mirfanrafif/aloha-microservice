import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { WablasSendMessageRequest } from 'src/core/wablas/wablas.dto';
import { WablasService } from 'src/core/wablas/wablas.service';

@Controller('message')
export class MessageController {
  constructor(private wablasService: WablasService) {}

  @MessagePattern('wablas_send_message')
  sendMessageToWablas(@Payload() data: WablasSendMessageRequest) {
    console.log('data', data);
    return this.wablasService.sendMessage(data);
  }
}
