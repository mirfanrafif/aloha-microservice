import { IsNotEmpty, IsEnum } from 'class-validator';

export enum MessageType {
  text = 'text',
  document = 'document',
  image = 'image',
  video = 'video',
}

export type WablasSendMessageRequest = {
  data: WablasSendMessageRequestData[];
};

export type Group = {
  subject: string;
  owner: string;
  desc: string;
};

export type WablasSendMessageRequestData = {
  phone: string;
  message: string;
  secret: boolean;
  retry: boolean;
  isGroup: boolean;
};

export type WablasSendDocumentRequest = {
  data: WablasSendDocumentRequestData[];
};

export type WablasSendDocumentRequestData = {
  phone: string;
  document: string;
  secret: boolean;
  retry: boolean;
  isGroup: boolean;
};

export type WablasSendImageRequest = {
  data: WablasSendImageRequestData[];
};

export type WablasSendImageRequestData = {
  phone: string;
  image: string;
  caption?: string;
  secret: boolean;
  retry: boolean;
  isGroup: boolean;
};

export type WablasSendVideoRequest = {
  data: WablasSendVideoRequestData[];
};

export type WablasSendVideoRequestData = {
  phone: string;
  video: string;
  caption: string;
  secret: boolean;
  retry: boolean;
  isGroup: boolean;
};

export class WablasApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export class SendMessageResponseData {
  messages: MessageResponseItem[];
}

export class MessageResponseItem {
  id: string;
  phone: string;
  message?: string;
  status: MessageStatus;
}

export class SendImageVideoResponse {
  messages: SendImageVideoResponseItem[];
}

export class SendImageVideoResponseItem {
  id: string;
  phone: string;
  caption?: string;
  image: string;
  status: MessageStatus;
}

export class SendVideoResponseData {
  messages: SendImageVideoResponseItem[];
}

export class VideoResponseItem {
  id: string;
  phone: string;
  message?: string;
  caption: string;
  video: string;
  status: MessageStatus;
}

export type SendDocumentResponse = {
  quota: number;
  messages: Message[];
};

export type Message = {
  id: string;
  phone: string;
  message: null;
  status: MessageStatus;
};

export enum MessageStatus {
  PENDING = 'pending',
  SENT = 'sent',
  READ = 'read',
  CANCEL = 'cancel',
  RECEIVED = 'received',
  REJECT = 'reject',
}

export class TextMessage {
  id: string;
  pushName: string;
  isGroup: boolean;
  group: Group;
  message: string;
  phone: string;

  @IsNotEmpty()
  @IsEnum(MessageType)
  messageType: MessageType;

  file: string;
  mimeType: string;
  // thumbProfile: string;
  sender: number;
  timestamp: number;
}
