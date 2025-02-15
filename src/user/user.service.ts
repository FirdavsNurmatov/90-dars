import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Pagination } from '../pagination/pagination';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    // @InjectRepository(User) private userRepository: Repository<User>,
    private readonly prismaService: PrismaService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // return await this.prismaService.user.create({ data: createUserDto });
    // return await this.userRepository.save(createUserDto);
  }

  async pagination(pagination: Pagination) {
    // const [users, total] = await this.userRepository.findAndCount({
    //   skip: pagination.offset,import { User } from './entities/user.entity';
    //   take: pagination.limit,
    // });
    // return { users, total };
  }

  async findAll() {
    // const allData = await this.userRepository.find();
    // if (allData.length === 0) {
    //   throw new NotFoundException('No data found');
    // }
    // return allData;
  }

  async findOne(id: number) {
    // const user = await this.userRepository.findOneBy({ id });
    // if (!user) {
    //   throw new NotFoundException('User not found');
    // }
    // return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // const updatedUserData = await this.userRepository.update(id, updateUserDto);
    // if (updatedUserData.affected === 0) {
    //   throw new NotFoundException('User not found');
    // }
    // return 'User updated successfully';
  }

  async remove(id: number) {
    // const user = await this.userRepository.delete(id);
    // if (user.affected === 0) {
    //   throw new NotFoundException('User not found');
    // }
    // return 'User deleted successfully';
  }
}
