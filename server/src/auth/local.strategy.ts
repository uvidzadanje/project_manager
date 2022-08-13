import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { LoginPayloadDto } from "./dto/login-payload.dto";

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string)
    {
        const user = await this.authService.validateUser({username, password});

        if(!user)
        {
            throw new UnauthorizedException("Nevalidni podaci");
        }

        return user;
    }
}