import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateInvDto } from './DTO/createInv.dto';
import { UpdateInvDto } from './DTO/updateInv.dto';


@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async createInventory(data: CreateInvDto) {
    const existing = await this.prisma.inventory.findUnique({ where: { itemName: data.itemName } });
    if (existing) throw new Error('Item already exists');

    return this.prisma.inventory.create({ data });
  }

  findAll() {
    return this.prisma.inventory.findMany();
  }

  findOne(id: number) {
    return this.prisma.inventory.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateInvDto) {
    return this.prisma.inventory.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.inventory.delete({ where: { id } });
  }
}



