import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AppRoutes } from '../../../../app/app.routes';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivateChild {
  private user = inject(UserService);
  private router = inject(Router);

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (!this.user.loggedIn()) return this.router.createUrlTree(['login']);

    const url = state.url.replace('/', '');

    switch (url) {
      case AppRoutes.card:
        return this.user.hasPermission('NavigateCard');
      case AppRoutes.cocktails:
        return this.user.hasPermission('NavigateCocktails');
      case AppRoutes.cart:
        return this.user.hasPermission('NavigateCart');
      case AppRoutes.queue:
        return this.user.hasPermission('NavigateQueue');

      default:
        return this.router.createUrlTree([this.user.landingPage()]);
    }
  }
}
