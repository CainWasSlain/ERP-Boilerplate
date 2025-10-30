import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateProjectDto } from './DTO/createProject.dto';
import { UpdateProjectDto } from './DTO/updateProject.dto';


@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async createProject(data: CreateProjectDto) {
    const existing = await this.prisma.project.findUnique({ where: { name: data.name } });
    if (existing) throw new Error('Project name already exists');

    return this.prisma.project.create({ data });
  }

  findAll() {
    return this.prisma.project.findMany();
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateProjectDto) {
    return this.prisma.project.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.project.delete({ where: { id } });
  }
}



