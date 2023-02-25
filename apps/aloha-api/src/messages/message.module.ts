import { Module } from '@nestjs/common';
import { MessageGateway } from './gateways/message.gateway';
import { MessageService } from './services/message.service';
import { MessageController } from './controller/message.controller';
import { MessageRepositoryModule } from '../core/repository/message/message.module';
import { CustomerModule } from '../customer/customer.module';
import { ConversationRepositoryModule } from '../core/repository/conversation/conversation-repository.module';
import { ConversationService } from './services/conversation.service';
import { UserJobModule } from '../job/user-job.module';
import { UserModule } from '../user/user.module';
import { MessageHelper } from './helper/message.helper';
import { WablasModule } from '../core/wablas/wablas.module';

@Module({
  providers: [
    MessageService,
    MessageGateway,
    ConversationService,
    MessageHelper,
  ],
  controllers: [MessageController],
  imports: [
    MessageRepositoryModule,
    CustomerModule,
    UserModule,
    ConversationRepositoryModule,
    UserJobModule,
    WablasModule,
  ],
})
export class MessageModule {}
