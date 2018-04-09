import { CookieService } from 'ngx-cookie-service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{CanActivate} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{

  constructor(private cookieService: CookieService,private router:Router) {}

  canActivate(){
      if(!this.cookieService.check('account')){
          this.router.navigate(['']);
          return true;
      }
      return true;
  }
}
