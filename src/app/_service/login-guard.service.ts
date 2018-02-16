import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private loginService: LoginService, private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let rpta = this.loginService.estaLogeado();
        if(+rpta !== 1){
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}