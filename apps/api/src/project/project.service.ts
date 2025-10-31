import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateProjectDto } from './DTO/createProject.dto';
import { UpdateProjectDto } from './DTO/updateProject.dto';


@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async createProject(data: CreateProjectDto) {
    return this.prisma.project.create({ data });
  }

  async getProjects() {
    return this.prisma.project.findMany({
      where: { deletedAt: null },
    });
  }

  async getProjectById(id: number) {
    return this.prisma.project.findUnique({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateProjectDto) {
    return this.prisma.project.update({ where: { id }, data });
  }

  async softDeleteProject(id: number) {
    return this.prisma.project.update({ where: { id }, data: { deletedAt: new Date() } } );
  }
}



