import { IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional } from 'class-validator';

export class TaxBracketUpdateDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  incomeRange: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rate: number;
}