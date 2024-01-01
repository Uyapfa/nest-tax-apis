import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserTaxData } from '../entities/usertax-data.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idNumber: string;

  @Column()
  name: string;

  @Column()
  surName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserTaxData, (userTaxData) => userTaxData.user, { cascade: true, onDelete: 'CASCADE' })
  userTaxData: UserTaxData[];
}
