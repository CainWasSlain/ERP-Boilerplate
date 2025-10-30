import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { CreateFinanceDto } from './DTO/createFianance.dto';
import { UpdateFinanceDto } from './DTO/updateFinance.dto';

@Controller('finance')
export class FinanceController {
    constructor (private readonly financeService: FinanceService) {}

    @Post()
    create(@Body() data: CreateFinanceDto) {
        return this.financeService.createFinance(data);
    }
     
    @Get()
    findAll() {
        return this.financeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.financeService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateFinanceDto) {
        return this.financeService.update(+id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.financeService.remove(+id);
    }
}
