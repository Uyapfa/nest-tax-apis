import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaxBracket } from '../entities/taxbrackets.entity';
import { TaxBracketDto } from './dto/tax-bracket.dto';
import { TaxBracketUpdateDto } from './dto/tax-bracket-update.dto';
import {  InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class TaxBracketService {
  constructor(
    @InjectRepository(TaxBracket)
    private readonly taxBracketRepository: Repository<TaxBracket>,
  ) {}

  async findAll(): Promise<TaxBracket[]> {
    try {
      return await this.taxBracketRepository.find();
    } catch (error) {
      throw new Error(`Error fetching tax brackets: ${error.message}`);
    }
  }

  async findById(id: number): Promise<TaxBracket | undefined> {
    try {
      const taxBracket = await this.taxBracketRepository.findOne({ where: { id: id } });
  
      if (!taxBracket) {
        throw new NotFoundException(`Tax bracket with ID ${id} not found`);
      }
  
      return taxBracket;
    } catch (error) {
      console.error(`Error finding tax bracket by ID: ${error.message}`);
      throw new InternalServerErrorException('Tax bracket with that id not found');
    }
  }

  async create(taxBracketDto: TaxBracketDto): Promise<TaxBracket> {
    try {
      const newTaxBracket: TaxBracket = this.taxBracketRepository.create(taxBracketDto);
      return await this.taxBracketRepository.save(newTaxBracket);
    } catch (error) {
      throw new Error(`Error creating tax bracket: ${error.message}`);
    }
  }

  async updateById(id: number, taxBracketDto: TaxBracketUpdateDto): Promise<TaxBracket | undefined> {
    try {
      const taxBracket = await this.taxBracketRepository.findOne({where: {id:id}});

      if (!taxBracket) {
        throw new NotFoundException(`Tax bracket with ID ${id} not found`);
      }

      taxBracket.incomeRange = taxBracketDto.incomeRange !== undefined ? taxBracketDto.incomeRange : taxBracket.incomeRange;
      taxBracket.rate = taxBracketDto.rate !== undefined ? taxBracketDto.rate : taxBracket.rate;

      return await this.taxBracketRepository.save(taxBracket);
    } catch (error) {
      throw new Error(`Error updating tax bracket: ${error.message}`);
    }
  }

  async deleteById(id: number): Promise<{ message: string }> {
    try {
      const result = await this.taxBracketRepository.delete(id);

      if (result.affected === 0) {
        throw new NotFoundException(`Tax bracket with ID ${id} not found`);
      }

      return {
        message: 'Tax bracket deleted successfully',
      };
    } catch (error) {
      throw new Error(`Error deleting tax bracket: ${error.message}`);
    }
  }
}