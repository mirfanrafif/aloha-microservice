import { IsNotEmpty, IsNumber } from 'class-validator';
import { CustomerAgent } from '../core/repository/customer-agent/customer-agent.entity';
import { CustomerEntity } from '../core/repository/customer/customer.entity';
import { UserEntity } from '../core/repository/user/user.entity';
import { MessageResponseDto } from '../messages/message.dto';

export type Customer = {
  id: number;
  phoneNumber: string;
};

export class DelegateCustomerRequestDto {
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @IsNotEmpty()
  @IsNumber()
  agentId: number;
}

export class CustomerAgentArrDto {
  id: number;

  customer: CustomerEntity;

  agent: UserEntity[];

  created_at: Date;

  updated_at: Date;
}

export class CustomerAgentResponseDto {
  id: number;

  customer: CustomerEntity;

  agent: UserEntity[];

  unread: number;

  lastMessage: MessageResponseDto | null;

  created_at: Date;

  updated_at: Date;
}
