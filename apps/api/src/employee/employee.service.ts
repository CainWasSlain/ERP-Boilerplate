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

  async getEmployees() {
    return this.prisma.employee.findMany();
  }

  async getEmployeeById(id: number) {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateEmployeeDto) {
    return this.prisma.employee.update({ where: { id }, data });
  }

  async DeleteEmployee(id: number) {
    return this.prisma.employee.delete({ where: { id } });
  }
}



