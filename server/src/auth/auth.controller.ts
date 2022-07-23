import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { UserPayloadDto } from './dto/user-payload.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import * as bcrypt from "bcrypt";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
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
        return req.user;
    }

    @Post('register')
    async create(@Body() createUserDto: CreateUserDto)
    {
        return this.userService.create(createUserDto);
    }

}
