import { Module } from '@nestjs/common';
import { ResponsibilityService } from './responsibility.service';
import { ResponsibilityController } from './responsibility.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsibility } from './entities/responsibility.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Responsibility])],
  controllers: [ResponsibilityController],
  providers: [ResponsibilityService]
})
export class ResponsibilityModule {}
