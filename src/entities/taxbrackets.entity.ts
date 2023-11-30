import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserTaxData } from '../entities/usertax-data.entity';

@Entity()
export class TaxBracket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false })
  incomeRange: string;

  @Column({ type: 'decimal', nullable: false })
  rate: number;

  @OneToMany(() => UserTaxData, (userTaxData) => userTaxData.taxBracket)
  userTaxData: UserTaxData[];
}
