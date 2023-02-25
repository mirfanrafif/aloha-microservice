import { Module } from '@nestjs/common';
import { MessageLibraryService } from './message-library.service';

@Module({
  providers: [MessageLibraryService],
  exports: [MessageLibraryService],
})
export class MessageLibraryModule {}
