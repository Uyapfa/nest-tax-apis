import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaxBracket } from '../entities/taxbrackets.entity';
import { TaxBracketDto } from './dto/tax-bracket.dto';

@Injectable()
export class TaxBracketService {
  constructor(
    @InjectRepository(TaxBracket)
    private readonly taxBracketRepository: Repository<TaxBracket>,
  ) {}

  async findAll(): Promise<TaxBracket[]> {
    return this.taxBracketRepository.find();
  }

  async create(taxBracketDto: TaxBracketDto): Promise<TaxBracket> {
    const newTaxBracket: TaxBracket = this.taxBracketRepository.create(taxBracketDto);
    return this.taxBracketRepository.save(newTaxBracket);
  }

}
