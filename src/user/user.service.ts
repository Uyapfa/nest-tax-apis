import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'; 
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { UserTaxData } from 'src/entities/usertax-data.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(UserTaxData) private readonly userTaxDataRepo: Repository<UserTaxData>,
  ) {}

  async findOne(id: number) {
    return await this.userRepo.findOne({ where: { id: id } });
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
    await this.userRepo.save(user);
    const { password, ...result } = user;
    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.userRepo.findOne({where: {id:id}});

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.userRepo.update(id, updateUserDto);
    return await this.userRepo.findOne({where: {id:id}});
  }

  async delete(id: number) {
    const user = await this.userRepo.findOne({ where: { id: id }, relations: ['userTaxData'] });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.userTaxDataRepo.remove(user.userTaxData);

    await this.userRepo.remove(user);

    return { message: `User with ID ${id} deleted successfully` };
  }
  
  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }
}
