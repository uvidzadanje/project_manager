export interface CreateEmployeeDto {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    employee_type_id: number;
}

export interface UpdateEmployeeDto extends Partial<CreateEmployeeDto> { }
