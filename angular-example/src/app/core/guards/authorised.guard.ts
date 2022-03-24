import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AUTH_ROUTE_PATH } from "../../subsystems/auth/auth-urls";


@Injectable()
export class AuthorisedGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!!this.authService.authToken) {
      return true;
    }
    this.router.navigateByUrl(AUTH_ROUTE_PATH.LOGIN);
    return false;
  }
}
