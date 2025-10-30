import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/createUser.dto';
import { UpdateUserDto } from './DTO/updateUser.dto';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {}

    @Post()
    create(@Body() data: CreateUserDto) {
        return this.userService.createUser(data);
    }
     
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateUserDto) {
        return this.userService.update(+id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
