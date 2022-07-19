import { Module } from '@nestjs/common';
import { ResponsibilityService } from './responsibility.service';
import { ResponsibilityController } from './responsibility.controller';

@Module({
  controllers: [ResponsibilityController],
  providers: [ResponsibilityService]
})
export class ResponsibilityModule {}
