import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
export class AuthService {
    constructor (
        private employeeService: EmployeeService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string)
    {
        const user = await this.employeeService.findByUsername(username);

        if(user && await bcrypt.compare(password, user.password))
        {
            const {password, ...result} = user;
            return result;
        }

        return null;
    }

    async login(user: {username: string, id: number})
    {
        const payload = { username: user.username, id: user.id };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
