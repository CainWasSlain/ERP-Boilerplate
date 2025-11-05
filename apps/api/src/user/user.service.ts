import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateUserDto } from './DTO/createUser.dto';
import { UpdateUserDto } from './DTO/updateUser.dto';
import * as bcrypt from 'bcrypt';
import { Role } from '../generated/prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: CreateUserDto ) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
        if (existing) {
            throw new Error("Email already exists");
        }
        return this.prisma.user.create({ data :{name: data.name, email: data.email, password: hashedPassword, role:data.role ?? Role.USER , refresh:null} });
    }
    
    async getUsers() {
        return this.prisma.user.findMany();
    }

    async getUserById(id: number) {
        return this.prisma.user.findUnique({ where: { id } });
    }
    async findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async update(id: number, data: UpdateUserDto) {
        if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
        }
        if (data.email) {
            const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
            if (existing) {
                throw new Error("Email already exists");
            }
        }
        return this.prisma.user.update({ where: { id }, data });
    }

    async DeleteUser(id: number) {
        return this.prisma.user.delete({ where: { id } });
    }
}



