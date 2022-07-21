import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResponsibilityDto } from './dto/create-responsibility.dto';
import { UpdateResponsibilityDto } from './dto/update-responsibility.dto';
import { Responsibility } from './entities/responsibility.entity';

@Injectable()
export class ResponsibilityService {
  constructor(
    @InjectRepository(Responsibility) private responsibilityRepository: Repository<Responsibility> 
  ) {}

  async create(createResponsibilityDto: CreateResponsibilityDto) {
    const responsibility = this.responsibilityRepository.create(createResponsibilityDto);
    return await this.responsibilityRepository.save(responsibility);
  }

  async findAll() {
    return await this.responsibilityRepository.find();
  }

  async findOne(id: number) {
    return await this.responsibilityRepository.findOne({where: {id}});
  }

  async update(id: number, updateResponsibilityDto: UpdateResponsibilityDto) {
    return await this.responsibilityRepository.update(id, updateResponsibilityDto);
  }

  async remove(id: number) {
    return await this.responsibilityRepository.delete(id);
  }
}
