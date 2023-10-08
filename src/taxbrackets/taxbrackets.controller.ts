// src/taxbrackets/taxbrackets.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaxBracketService } from './taxbrackets.service';
import { TaxBracket } from '../entities/taxbrackets.entity';

@Controller('taxbrackets')
export class TaxBracketController {
  constructor(private readonly taxBracketService: TaxBracketService) {}

  @Get()
  findAll(): Promise<TaxBracket[]> {
    return this.taxBracketService.findAll();
  }

  @Post()
  create(@Body() taxBracket: TaxBracket): Promise<TaxBracket> {
    return this.taxBracketService.create(taxBracket);
  }
}
