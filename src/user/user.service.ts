import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ email, name, password }: CreateUserDTO) {
    return await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
      // select: {
      //   id: true,
      //   name: true,
      // },
    });
  }

  async list() {
    return await this.prisma.user.findMany();
  }
  async show(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }
}
