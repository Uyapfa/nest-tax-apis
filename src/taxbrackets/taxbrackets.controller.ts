// src/taxbrackets/taxbrackets.controller.ts

import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { TaxBracketService } from './taxbrackets.service';
import { TaxBracket } from '../entities/taxbrackets.entity';
import { TaxBracketDto } from './dto/tax-bracket.dto';

@Controller('taxbrackets')
export class TaxBracketController {
  constructor(private readonly taxBracketService: TaxBracketService) {}

  @Get('findAll')
  findAll(): Promise<TaxBracket[]> {
    return this.taxBracketService.findAll();
  }

  @Post('add')
  create(@Body(new ValidationPipe({ transform: true })) taxBracketDto: TaxBracketDto): Promise<TaxBracket> {
    return this.taxBracketService.create(taxBracketDto);
  }
}
