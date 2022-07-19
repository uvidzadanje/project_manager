import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponsibilityService } from './responsibility.service';
import { CreateResponsibilityDto } from './dto/create-responsibility.dto';
import { UpdateResponsibilityDto } from './dto/update-responsibility.dto';

@Controller('responsibility')
export class ResponsibilityController {
  constructor(private readonly responsibilityService: ResponsibilityService) {}

  @Post()
  create(@Body() createResponsibilityDto: CreateResponsibilityDto) {
    return this.responsibilityService.create(createResponsibilityDto);
  }

  @Get()
  findAll() {
    return this.responsibilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsibilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponsibilityDto: UpdateResponsibilityDto) {
    return this.responsibilityService.update(+id, updateResponsibilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsibilityService.remove(+id);
  }
}
