export interface CreateResponsibilityDto {
  teamId: number;
  employeeId: number;
  projectId: number;
  description: string;
}

export interface UpdateResponsibilityDto extends Partial<CreateResponsibilityDto> {}
