import { IsOptional, IsNumber, IsDecimal } from 'class-validator';

export class UpdateUserTaxDataDto {
  @IsOptional()
  @IsNumber()
  userId?: number; 

  @IsOptional()
  @IsNumber()
  taxBracketId?: number; 

  @IsOptional()
  @IsDecimal({ force_decimal: true, decimal_digits: '2' })
  income?: string;

  @IsOptional()
  @IsDecimal({ force_decimal: true, decimal_digits: '2' })
  calculatedTax?: string;
}
