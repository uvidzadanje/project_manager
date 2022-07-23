import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStategy } from './jwt.strategy';
import { LocalStategy } from './local.strategy';
import { JWT_SECRET_KEY } from './jwt.config';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET_KEY,
      signOptions: { expiresIn: "600s" }
    })
  ],
  providers: [AuthService, JwtStategy, LocalStategy],
  controllers: [AuthController]
})
export class AuthModule {}
