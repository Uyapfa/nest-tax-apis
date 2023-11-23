
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserTaxDataService } from './usertax-data.service';
import { UserTaxData } from '../entities/usertax-data.entity';
import { CreateUserTaxDataDto } from './dto/usertax-data.dto';

@Controller('usertax-data')
export class UserTaxDataController {
  constructor(private readonly userTaxDataService: UserTaxDataService) {}

  @Get("get")
  findAll(): Promise<UserTaxData[]> {
    return this.userTaxDataService.findAll();
  }

  @Post("add")
  create(@Body() createUserTaxDataDto: CreateUserTaxDataDto): Promise<UserTaxData> {
    return this.userTaxDataService.create(createUserTaxDataDto);
  }
}
