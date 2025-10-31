import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './DTO/createProject.dto';
import { UpdateProjectDto } from './DTO/updateProject.dto';

@Controller('project')
export class ProjectController {
    constructor (private readonly projectService: ProjectService) {}

    @Post()
    create(@Body() data: CreateProjectDto) {
        return this.projectService.createProject(data);
    }
     
    @Get()
    findAll() {
        return this.projectService.getProjects();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.projectService.getProjectById(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateProjectDto) {
        return this.projectService.update(+id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.projectService.softDeleteProject(+id);
    }
}
