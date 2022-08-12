export interface CreateTeamDto {
  name: string;
}

export interface UpdateTeamDto extends Partial<CreateTeamDto> { }
