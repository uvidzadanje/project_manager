import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";
import { UserPayloadDto } from "./dto/user-payload.dto";
import { JWT_SECRET_KEY } from "./jwt.config";

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET_KEY,
        });
    }

    async validate(payload: UserPayloadDto)
    {
        return payload;
    }
}