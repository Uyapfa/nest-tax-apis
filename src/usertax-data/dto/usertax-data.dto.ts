
import { IsNumber, IsDecimal, IsPositive } from 'class-validator';

export class CreateUserTaxDataDto {
  @IsNumber()
  userId: number; 

  @IsNumber()
  taxBracketId: number; 

  @IsDecimal({ force_decimal: true, decimal_digits: '2' })
  income: string;

  @IsDecimal({ force_decimal: true, decimal_digits: '2' })
  calculatedTax: string;
}
