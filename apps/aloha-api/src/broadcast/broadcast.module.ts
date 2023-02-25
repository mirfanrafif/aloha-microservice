import { Module } from '@nestjs/common';
import { WablasModule } from '../core/wablas/wablas.module';
import { CustomerCrmModule } from '../core/pukapuka/customer-crm.module';
import { MessageBroadcastController } from './broadcast-message.controller';
import { BroadcastMessageService } from './broadcast-message.service';

@Module({
  imports: [WablasModule, CustomerCrmModule],
  controllers: [MessageBroadcastController],
  providers: [BroadcastMessageService],
})
export class BroadcastMessageModule {}
