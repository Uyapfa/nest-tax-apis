
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTaxData } from '../entities/usertax-data.entity';
import { CreateUserTaxDataDto } from './dto/usertax-data.dto';
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

  async create(createUserTaxDataDto: CreateUserTaxDataDto): Promise<UserTaxData> {
    const userTaxData = new UserTaxData();
    userTaxData.income = createUserTaxDataDto.income;
    userTaxData.calculatedTax = createUserTaxDataDto.calculatedTax;

    
    userTaxData.user = { id: createUserTaxDataDto.userId } as User; 

    return this.userTaxDataRepository.save(userTaxData);
  }
}
