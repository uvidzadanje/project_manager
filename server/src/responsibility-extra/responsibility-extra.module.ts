import { Module } from '@nestjs/common';
import { ResponsibilityExtraService } from './responsibility-extra.service';
import { ResponsibilityExtraController } from './responsibility-extra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsibility } from 'src/responsibility/entities/responsibility.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Responsibility])],
  controllers: [ResponsibilityExtraController],
  providers: [ResponsibilityExtraService],
  exports: [ResponsibilityExtraService]
})
export class ResponsibilityExtraModule {}
