import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaxBracketModule } from './taxbrackets/taxbrackets.module'; // Include TaxBracketModule
import { UserTaxDataModule } from './usertax-data/ usertax-data.module'; // Include UserTaxDataModule

import { TypeOrmModule } from '@nestjs/typeorm';

import config from 'ormconfig';

@Module({
  imports: [
    UserModule,
    TaxBracketModule, // Include TaxBracketModule
    UserTaxDataModule, // Include UserTaxDataModule
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
