import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/services/prisma.service';
import { CreateInvoiceDto } from '../dtos/create-invoice.dto';
import {UpdateInvoiceDto} from "../dtos/update-invoice.dto";

/** TODO:
 * Replace all the User: { connect: { id } } with the request.user.id ( from the middleware )
 */

 @Injectable()
export class InvoicesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateInvoiceDto) {
    return this.prisma.invoice.create({
      data: {
        ...dto,
        User: { connect: { id: '025247dc-8c1f-46dc-9d37-fd507edc5fdd' } },
      },
    });
  }

  findAll() {
    return this.prisma.invoice.findMany();
  }

  findOne(id: number) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateInvoiceDto) {
    return this.prisma.invoice.update({
      where: { id },
      data: dto,
    });
  }

  delete(id: number) {
    return this.prisma.invoice.delete({ where: { id } });
  }
}
