// src/usertax-data/usertax-data.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserTaxDataService } from './usertax-data.service';
import { UserTaxData } from '../entities/usertax-data.entity';

@Controller('usertax-data')
export class UserTaxDataController {
  constructor(private readonly userTaxDataService: UserTaxDataService) {}

  @Get()
  findAll(): Promise<UserTaxData[]> {
    return this.userTaxDataService.findAll();
  }

  @Post()
  create(@Body() userTaxData: UserTaxData): Promise<UserTaxData> {
    return this.userTaxDataService.create(userTaxData);
  }
}
