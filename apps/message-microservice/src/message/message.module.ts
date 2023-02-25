import { Module } from '@nestjs/common';
import { WablasModule } from 'src/core/wablas/wablas.module';
import { MessageController } from './message.controller';

@Module({
  imports: [WablasModule],
  controllers: [MessageController],
})
export class MessageModule {}
