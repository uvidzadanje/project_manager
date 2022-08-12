export interface CreateProjectDto {
  name: string;
  deadline_timestamp: string;
}

export interface UpdateProjectDto extends Partial<CreateProjectDto> { }
