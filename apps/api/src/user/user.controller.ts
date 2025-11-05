import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/createUser.dto';
import { UpdateUserDto } from './DTO/updateUser.dto';
import { Roles } from '../auth/decorators/role.decorator';
import { Role } from '../generated/prisma/client';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {}

    @Post()
    create(@Body() data: CreateUserDto) {
        return this.userService.createUser(data);
    }
     
    @Roles(Role.ADMIN)
    @Get()
    findAll() {
        return this.userService.getUsers();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.getUserById(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateUserDto) {
        return this.userService.update(+id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.DeleteUser(+id);
    }
}
