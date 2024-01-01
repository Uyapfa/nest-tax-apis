import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNumberString, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  surName?: string;

  @IsNumberString()
  @IsOptional()
  idNumber?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;
}

