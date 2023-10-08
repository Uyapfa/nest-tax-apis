// src/taxbrackets/taxbrackets.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxBracketController } from './taxbrackets.controller';
import { TaxBracketService } from './taxbrackets.service';
import { TaxBracket } from '../entities/taxbrackets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxBracket])],
  controllers: [TaxBracketController],
  providers: [TaxBracketService],
})
export class TaxBracketModule {}
