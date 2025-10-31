import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './DTO/createEmployee.dto';
import { UpdateEmployeeDto } from './DTO/updateEmployee.dto';

@Controller('employee')
export class EmployeeController {
    constructor (private readonly employeeService: EmployeeService) {}

    @Post()
    create(@Body() data: CreateEmployeeDto) {
        return this.employeeService.createEmployee(data);
    }
     
    @Get()
    findAll() {
        return this.employeeService.getEmployees();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.employeeService.getEmployeeById(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateEmployeeDto) {
        return this.employeeService.update(+id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.employeeService.DeleteEmployee(+id);
    }
}
