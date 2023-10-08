// src/usertax-data/usertax-data.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTaxData } from '../entities/usertax-data.entity';

@Injectable()
export class UserTaxDataService {
  constructor(
    @InjectRepository(UserTaxData)
    private readonly userTaxDataRepository: Repository<UserTaxData>,
  ) {}

  async findAll(): Promise<UserTaxData[]> {
    return this.userTaxDataRepository.find();
  }

  async create(userTaxData: UserTaxData): Promise<UserTaxData> {
    return this.userTaxDataRepository.save(userTaxData);
  }
}

