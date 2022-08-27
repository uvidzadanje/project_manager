import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Responsibility } from 'src/responsibility/entities/responsibility.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResponsibilityExtraService {
    constructor(
        @InjectRepository(Responsibility) private responsibilityRepository: Repository<Responsibility>
    ) {}

    async deleteByEmployeeAndTeam({teamId, employeeId}: {teamId: number, employeeId: number})
    {
        return await this.responsibilityRepository.delete({team: {id: teamId}, employee: {id: employeeId}})
    }

    async deleteByTeamAndProject({team_id, project_id}: {team_id: number, project_id: number})
    {
        return await this.responsibilityRepository.delete({team: {id: team_id}, project: {id: project_id}});
    }
}
