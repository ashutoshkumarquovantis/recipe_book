import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      map((user) => {
       const isAuth =  !!user;
       if(isAuth){
           return true;
       }
       return this.router.createUrlTree(['/auth']);
      }), 

    // * We can do redirect in router like this but this could create a race condition, hence we should use a newer 
    // *approach which angular provides...
    //   tap(isAuth => {
    //       if(!isAuth){
    //           this.router.navigate(['/auth']);
    //       }
    //   })
    );
  }
}
