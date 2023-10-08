import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  surName: string;

@IsNumberString()
idNumber: string


  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
