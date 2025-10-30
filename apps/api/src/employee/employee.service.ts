import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateEmployeeDto } from './DTO/createEmployee.dto';
import { UpdateEmployeeDto } from './DTO/updateEmployee.dto';


@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async createEmployee(data: CreateEmployeeDto) {
    const existing = await this.prisma.employee.findUnique({ where: { email: data.email } });
    if (existing) throw new Error('Email already exists');

    return this.prisma.employee.create({ data });
  }

  findAll() {
    return this.prisma.employee.findMany();
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateEmployeeDto) {
    return this.prisma.employee.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.employee.delete({ where: { id } });
  }
}



