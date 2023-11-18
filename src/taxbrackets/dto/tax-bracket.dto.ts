// src/taxbrackets/dto/tax-bracket.dto.ts

import { IsString, IsNumber, MinLength, IsNotEmpty, IsPositive } from 'class-validator';

export class TaxBracketDto {
  @IsNotEmpty()
  @IsString()
  incomeRange: string;

  @IsNotEmpty()
  @IsNumber()
  rate: number;
}
