import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stock/stock.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [ConfigModule.forRoot(),StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
