import { Controller } from '@nestjs/common';
import { ResponsibilityExtraService } from './responsibility-extra.service';

@Controller('responsibility-extra')
export class ResponsibilityExtraController {
  constructor(private readonly responsibilityExtraService: ResponsibilityExtraService) {}
}
