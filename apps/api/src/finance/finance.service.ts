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

  async getFinances() {
    return this.prisma.finance.findMany({
      where: { deletedAt: null },
    });
  }

  async getFinanceById(id: number) {
    return this.prisma.finance.findUnique({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateFinanceDto) {
    return this.prisma.finance.update({ where: { id }, data });
  }

  async softDeleteFinance(id: number) {
    return this.prisma.finance.update({ where: { id } , data: { deletedAt: new Date() } });
  }
}



