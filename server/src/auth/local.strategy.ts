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

    async validate(loginPayload: LoginPayloadDto)
    {
        const user = await this.authService.validateUser(loginPayload);

        if(!user)
        {
            throw new UnauthorizedException();
        }

        return user;
    }
}