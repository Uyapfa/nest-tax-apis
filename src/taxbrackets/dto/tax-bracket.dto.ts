import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';

export class TaxBracketDto {
  @IsNotEmpty()
  @IsString()
  incomeRange: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rate: number;
}
