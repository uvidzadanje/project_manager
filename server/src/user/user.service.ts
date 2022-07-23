import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) { }

    async findOne(username: string)
    {
        return await this.userRepository.findOne({ where: { username } });
    }

    async create(createUserDto: CreateUserDto)
    {
        const saltRounds = 10;
        createUserDto.password = await bcrypt.hash(createUserDto.password, saltRounds);
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }
}
