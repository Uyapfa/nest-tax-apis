import { Controller, Get, Post, Body, Param, Put, Delete, ValidationPipe } from '@nestjs/common';
import { TaxBracketService } from './taxbrackets.service';
import { TaxBracket } from '../entities/taxbrackets.entity';
import { TaxBracketDto } from './dto/tax-bracket.dto';
import { TaxBracketUpdateDto } from './dto/tax-bracket-update.dto';

@Controller('taxbrackets')
export class TaxBracketController {
  constructor(private readonly taxBracketService: TaxBracketService) {}

  @Get('findAll')
  findAll(): Promise<TaxBracket[]> {
    return this.taxBracketService.findAll();
  }

  @Get('get/by/id/:id')
  findById(@Param('id') id: number): Promise<TaxBracket | undefined> {
    return this.taxBracketService.findById(id);
  }

  @Post('add')
  create(@Body(new ValidationPipe({ transform: true })) taxBracketDto: TaxBracketDto): Promise<TaxBracket> {
    return this.taxBracketService.create(taxBracketDto);
  }

  @Put('update/by/id/:id')
  updateById(@Param('id') id: number, @Body(new ValidationPipe({ transform: true })) taxBracketDto: TaxBracketUpdateDto): Promise<TaxBracket | undefined> {
    return this.taxBracketService.updateById(id, taxBracketDto);
  }

  @Delete('delete/by/id/:id')
  deleteById(@Param('id') id: number): Promise<{ message: string }> {
    return this.taxBracketService.deleteById(id);
  }

}
