import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PrismaService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
