import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaxBracketModule } from './taxbrackets/taxbrackets.module'; 
import { UserTaxDataModule } from './usertax-data/ usertax-data.module'; 

import { TypeOrmModule } from '@nestjs/typeorm';

import config from 'ormconfig';

@Module({
  imports: [
    UserModule,
    TaxBracketModule, 
    UserTaxDataModule, 
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
