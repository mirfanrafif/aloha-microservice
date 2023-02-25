import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from '../core/repository/user/user.entity';

export class LoginRequestDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class RegisterRequestDto {
  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;

  jobId?: number;
}

export class UserJwtPayload {
  id: number;
}
