import { Test, TestingModule } from '@nestjs/testing';
import { MessageLibraryService } from './message-library.service';

describe('MessageLibraryService', () => {
  let service: MessageLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageLibraryService],
    }).compile();

    service = module.get<MessageLibraryService>(MessageLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
