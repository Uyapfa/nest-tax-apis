import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTaxDataController } from './usertax-data.controller';
import { UserTaxDataService } from './usertax-data.service';
import { UserTaxData } from '../entities/usertax-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTaxData])],
  controllers: [UserTaxDataController],
  providers: [UserTaxDataService],
})
export class UserTaxDataModule {}

