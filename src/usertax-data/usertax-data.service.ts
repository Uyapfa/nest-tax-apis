import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTaxData } from '../entities/usertax-data.entity';
import { CreateUserTaxDataDto } from './dto/CreateUsertax-data.Dto'; 
import { UpdateUserTaxDataDto } from './dto/UpdateUserTaxDataDto';
import { User } from '../entities/user.entity';
import { TaxBracket } from 'src/entities/taxbrackets.entity';

@Injectable()
export class UserTaxDataService {
  constructor(
    @InjectRepository(UserTaxData)
    private readonly userTaxDataRepository: Repository<UserTaxData>,
  ) {}

  async findAll(): Promise<UserTaxData[]> {
    try {
      return await this.userTaxDataRepository.find();
    } catch (error) {
      throw new Error(`Error fetching user tax data: ${error.message}`);
    }
  }

  async findById(id: number): Promise<UserTaxData | undefined> {
    try {
      return await this.userTaxDataRepository.findOne({ where: { id: id } });
    } catch (error) {
      throw new Error(`Error finding user tax data by ID: ${error.message}`);
    }
  }

  async create(createUserTaxDataDto: CreateUserTaxDataDto): Promise<UserTaxData> {
    try {
      const userTaxData = new UserTaxData();
      userTaxData.income = createUserTaxDataDto.income;
      userTaxData.calculatedTax = createUserTaxDataDto.calculatedTax;
      userTaxData.user = { id: createUserTaxDataDto.userId } as User;
      userTaxData.taxBracket = { id: createUserTaxDataDto.taxBracketId } as TaxBracket;

      return await this.userTaxDataRepository.save(userTaxData);
    } catch (error) {
      throw new Error(`Error creating user tax data: ${error.message}`);
    }
  }

  async updateById(id: number, updateUserTaxDataDto: UpdateUserTaxDataDto): Promise<UserTaxData | undefined> {
    try {
      const userTaxData = await this.userTaxDataRepository.findOne({ where: { id: id } });

      if (!userTaxData) {
        throw new NotFoundException(`User tax data with ID ${id} not found`);
      }

      userTaxData.income = updateUserTaxDataDto.income !== undefined ? updateUserTaxDataDto.income : userTaxData.income;
      userTaxData.calculatedTax = updateUserTaxDataDto.calculatedTax !== undefined ? updateUserTaxDataDto.calculatedTax : userTaxData.calculatedTax;
      userTaxData.user = updateUserTaxDataDto.userId !== undefined ? { id: updateUserTaxDataDto.userId } as User : userTaxData.user;

      return await this.userTaxDataRepository.save(userTaxData);
    } catch (error) {
      throw new Error(`Error updating user tax data: ${error.message}`);
    }
  }

  async deleteById(id: number): Promise<{ message: string }> {
    try {
      const result = await this.userTaxDataRepository.delete(id);
      
      if (result.affected === 0) {
        throw new NotFoundException(`User tax data with ID ${id} not found`);
      }

      return {
        message: 'User tax data deleted successfully',
      };
    } catch (error) {
      throw new Error(`Error deleting user tax data: ${error.message}`);
    }
  }
}
