import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStategy } from './jwt.strategy';
import { LocalStategy } from './local.strategy';
import { JWT_EXPIRES_IN, JWT_SECRET_KEY } from './jwt.config';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [
    EmployeeModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET_KEY,
      signOptions: { expiresIn: JWT_EXPIRES_IN }
    })
  ],
  providers: [AuthService, JwtStategy, LocalStategy],
  controllers: [AuthController]
})
export class AuthModule {}
