import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserTaxDataService } from './usertax-data.service';
import { UserTaxData } from '../entities/usertax-data.entity';
import { CreateUserTaxDataDto } from './dto/CreateUsertax-data.Dto';
import { UpdateUserTaxDataDto } from './dto/UpdateUserTaxDataDto';

@Controller('usertax-data')
export class UserTaxDataController {
  constructor(private readonly userTaxDataService: UserTaxDataService) {}

  @Get('get/all')
  findAll(): Promise<UserTaxData[]> {
    return this.userTaxDataService.findAll();
  }

  @Get('get/by/id/:id')
  findById(@Param('id') id: number): Promise<UserTaxData | undefined> {
    return this.userTaxDataService.findById(id);
  }

  @Post('add')
  create(@Body() createUserTaxDataDto: CreateUserTaxDataDto): Promise<UserTaxData> {
    return this.userTaxDataService.create(createUserTaxDataDto);
  }

  @Put('/updateby/id/:id')
  updateById(@Param('id') id: number, @Body() updateUserTaxDataDto: UpdateUserTaxDataDto): Promise<UserTaxData | undefined> {
    return this.userTaxDataService.updateById(id, updateUserTaxDataDto);
  }

  @Delete('delete/by/id/:id')
async deleteById(@Param('id') id: number): Promise<{ message: string }> {
  return this.userTaxDataService.deleteById(id);
}
}
