import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInvDto } from './DTO/createInv.dto';
import { UpdateInvDto } from './DTO/updateInv.dto';

@Controller('inventory')
export class InventoryController {
    constructor (private readonly inventoryService: InventoryService) {}

    @Post()
    create(@Body() data: CreateInvDto) {
        return this.inventoryService.createInventory(data);
    }
     
    @Get()
    findAll() {
        return this.inventoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.inventoryService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateInvDto) {
        return this.inventoryService.update(+id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.inventoryService.remove(+id);
    }
}
