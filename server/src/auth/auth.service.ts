import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";
import { EmployeeService } from 'src/employee/employee.service';
import { LoginPayloadDto } from './dto/login-payload.dto';
import { UserPayloadDto } from './dto/user-payload.dto';

@Injectable()
export class AuthService {
    constructor (
        private employeeService: EmployeeService,
        private jwtService: JwtService
    ) {}

    async validateUser(loginPayload: LoginPayloadDto)
    {
        const user = await this.employeeService.findByUsername(loginPayload.username);

        if(user && await bcrypt.compare(loginPayload.password, user.password))
        {
            const {password, ...result} = user;
            return result;
        }

        return null;
    }

    async login(user: UserPayloadDto)
    {
        const payload = { username: user.username, id: user.id };

        const {password, ...employee} = await this.employeeService.findOne(payload.id);

        return {
            access_token: this.jwtService.sign(payload),
            employee
        }
    }

    async getLoggedEmployeeInfo(id: number)
    {
        const user = await this.employeeService.findOne(id);
        const {password, ...result} = user;

        return result;
    }
}
