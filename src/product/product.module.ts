import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), PrismaService],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
