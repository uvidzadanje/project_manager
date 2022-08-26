import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { CreateEmployeeDto } from 'src/employee/dto/create-employee.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly employeeService: EmployeeService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req)
    {
        return this.authService.login(req.user);   
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getUserInfo(@Request() req)
    {
        return await this.authService.getLoggedEmployeeInfo(req.user.id);
    }

    @Post('register')
    async create(@Body() createEmployeeDto: CreateEmployeeDto)
    {
        return this.employeeService.create(createEmployeeDto);
    }

}
