import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateInvDto } from './DTO/createInv.dto';
import { UpdateInvDto } from './DTO/updateInv.dto';


@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async createInventory(data: CreateInvDto) {
    return this.prisma.inventory.create({ data });
  }

  async getInventory() {
    return this.prisma.inventory.findMany({
      where: { deletedAt: null },
    });
  }

  async getInventoryById(id: number) {
    return this.prisma.inventory.findUnique({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateInvDto) {
    return this.prisma.inventory.update({ where: { id }, data });
  }

  async softDeleteInventory(id: number) {
    return this.prisma.inventory.update({ where: { id } , data: { deletedAt: new Date() } });
  }
}



