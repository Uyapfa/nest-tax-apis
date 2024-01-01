// usertax-data/usertax-data.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTaxData } from '../entities/usertax-data.entity';
import { CreateUserTaxDataDto } from './dto/CreateUsertax-data.Dto'; 
import { UpdateUserTaxDataDto } from './dto/UpdateUserTaxDataDto';
import { User } from '../entities/user.entity';


@Injectable()
export class UserTaxDataService {
  constructor(
    @InjectRepository(UserTaxData)
    private readonly userTaxDataRepository: Repository<UserTaxData>,
  ) {}

  async findAll(): Promise<UserTaxData[]> {
    return this.userTaxDataRepository.find();
  }

  async findById(id: number): Promise<UserTaxData | undefined> {
    return this.userTaxDataRepository.findOne({where:{id:id}});
  }

  async create(createUserTaxDataDto: CreateUserTaxDataDto): Promise<UserTaxData> {
    const userTaxData = new UserTaxData();
    userTaxData.income = createUserTaxDataDto.income;
    userTaxData.calculatedTax = createUserTaxDataDto.calculatedTax;
    userTaxData.user = { id: createUserTaxDataDto.userId } as User;

    return this.userTaxDataRepository.save(userTaxData);
  }

  async updateById(id: number, updateUserTaxDataDto: UpdateUserTaxDataDto): Promise<UserTaxData | undefined> {
    const userTaxData = await this.userTaxDataRepository.findOne({where:{id:id}});

    if (!userTaxData) {
      return undefined;
    }

    userTaxData.income = updateUserTaxDataDto.income !== undefined ? updateUserTaxDataDto.income : userTaxData.income;
    userTaxData.calculatedTax = updateUserTaxDataDto.calculatedTax !== undefined ? updateUserTaxDataDto.calculatedTax : userTaxData.calculatedTax;
    userTaxData.user = updateUserTaxDataDto.userId !== undefined ? { id: updateUserTaxDataDto.userId } as User : userTaxData.user;

    return this.userTaxDataRepository.save(userTaxData);
  }

  async deleteById(id: number): Promise<void> {
    await this.userTaxDataRepository.delete(id);
  }
}
