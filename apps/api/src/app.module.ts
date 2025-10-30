import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './common/prisma.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProjectModule } from './project/project.module';
import { FinanceModule } from './finance/finance.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,      
      envFilePath: '.env',  
    }), PrismaModule, UserModule,EmployeeModule,InventoryModule,ProjectModule,FinanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
