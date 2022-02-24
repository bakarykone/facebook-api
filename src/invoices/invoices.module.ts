import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { InvoicesController } from './controllers/invoices.controller';
import { InvoicesService } from './services/invoices.service';

@Module({
  imports: [DatabaseModule],
  controllers: [InvoicesController],
  providers: [InvoicesService],
})
export class InvoicesModule {}
