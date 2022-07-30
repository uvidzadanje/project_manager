import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { EmployeeService } from "src/employee/employee.service";

Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        @Inject(Reflector) private reflector: Reflector,
        @Inject(EmployeeService) private userService: EmployeeService
    ) {}

    async canActivate(context: ExecutionContext) {
        const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());

        const req = context.switchToHttp().getRequest();

        if(!req.user) return false;

        const { id } = req.user;
        
        const user = await this.userService.findOne(id);

        return requiredRoles.some((role) => role === user.type.name.toLowerCase());
    }

}