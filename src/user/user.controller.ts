import { Body, Controller, Delete, Get, Param, Post, Put,  } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get/user/by/id/:id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post('add')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put('update/user/by/id/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('delete/user/by/id/:id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }

  @Get('get/all')
  findAll() {
    return this.userService.findAll();
  }
}
