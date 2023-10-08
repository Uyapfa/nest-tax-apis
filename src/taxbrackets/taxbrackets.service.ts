// src/taxbrackets/taxbrackets.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaxBracket } from '../entities/taxbrackets.entity';

@Injectable()
export class TaxBracketService {
  constructor(
    @InjectRepository(TaxBracket)
    private readonly taxBracketRepository: Repository<TaxBracket>,
  ) {}

  async findAll(): Promise<TaxBracket[]> {
    return this.taxBracketRepository.find();
  }

  async create(taxBracket: TaxBracket): Promise<TaxBracket> {
    return this.taxBracketRepository.save(taxBracket);
  }
}
