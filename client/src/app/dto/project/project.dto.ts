export interface CreateProjectDto {
  name: string;
  deadline_timestamp: Date;
}

export interface UpdateProjectDto extends Partial<CreateProjectDto> { }
