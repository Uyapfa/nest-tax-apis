import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTaxData } from 'src/entities/usertax-data.entity';
import { User } from 'src/entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserTaxData])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
