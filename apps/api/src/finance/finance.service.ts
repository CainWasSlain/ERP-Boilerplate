import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateFinanceDto } from './DTO/createFianance.dto';
import { UpdateFinanceDto } from './DTO/updateFinance.dto';


@Injectable()
export class FinanceService {
  constructor(private prisma: PrismaService) {}

  async createFinance(data: CreateFinanceDto) {
    return this.prisma.finance.create({ data });
  }

  findAll() {
    return this.prisma.finance.findMany();
  }

  findOne(id: number) {
    return this.prisma.finance.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateFinanceDto) {
    return this.prisma.finance.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.finance.delete({ where: { id } });
  }
}



