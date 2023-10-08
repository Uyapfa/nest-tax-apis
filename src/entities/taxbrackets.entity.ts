// src/taxbrackets/taxbrackets.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserTaxData } from '../entities/usertax-data.entity';

@Entity()
export class TaxBracket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: 'decimal', nullable: false })
  rate: number;

  @OneToMany(() => UserTaxData, (userTaxData) => userTaxData.taxBracket)
  userTaxData: UserTaxData[];
}
