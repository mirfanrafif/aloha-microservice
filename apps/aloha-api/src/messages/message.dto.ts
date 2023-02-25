import { MessageType } from '@aloha/message-library';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CustomerEntity } from '../core/repository/customer/customer.entity';
import { MessageStatus } from '../core/repository/message/message.entity';
import { UserEntity } from '../core/repository/user/user.entity';

export class MessageRequestDto {
  @IsNotEmpty()
  customerNumber: string;

  @IsNotEmpty()
  message: string;
}

export class BulkMessageRequestDto {
  @ValidateNested({
    each: true,
  })
  messages: MessageRequestDto[];
}

export class ImageMessageRequestDto {
  @IsNotEmpty()
  customerNumber: string;

  @IsString()
  message: string;
}

export class BroadcastImageMessageRequestDto {
  @IsString()
  message: string;

  @IsNotEmpty()
  categories: string;

  @IsNotEmpty()
  interests: string;

  @IsNotEmpty()
  types: string;
}

export class BroadcastDocumentMessageRequestDto {
  @IsNotEmpty()
  categories: string;

  @IsNotEmpty()
  interests: string;

  @IsNotEmpty()
  types: string;
}

export class DocumentRequestDto {
  @IsNotEmpty()
  customerNumber: string;
}

export class BroadcastMessageRequest {
  @IsNotEmpty()
  message: string;

  @IsArray()
  categories: string[];

  @IsArray()
  interests: string[];

  @IsArray()
  types: string[];
}

export class MessageResponseDto {
  id: number;
  messageId: string;
  message: string;
  customer: CustomerEntity;
  status: MessageStatus;
  agent: UserEntity;
  file: string;
  sender_name: string;
  type: MessageType;
  fromMe: boolean;
  created_at: Date;
  updated_at: Date;
}

export type MessageTrackingDto = {
  id: string;
  message: string;
  phone: string;
  deviceId: string;
  sender: string;
  status: MessageStatus;
  note: string;
  timestamp: Date;
};

export class StartConversationDto {
  @IsNotEmpty()
  @IsNumber()
  customerId: number;
}

export class SendDocumentViaUrlDto {
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  customerNumber: string;
}
