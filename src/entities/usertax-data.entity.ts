import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../entities/user.entity';
import { TaxBracket } from '../entities/taxbrackets.entity';


@Entity()
export class UserTaxData {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userTaxData)
  user: User;

  @ManyToOne(() => TaxBracket, (taxBracket) => taxBracket.userTaxData)
  taxBracket: TaxBracket;

  @Column({ type: 'decimal', nullable: false })
  income: string; 

  @Column({ type: 'decimal', nullable: false })
  calculatedTax: string;
}
