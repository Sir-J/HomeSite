import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'app/guards/login.guard';

import { AppMainComponent, LoginComponent } from './components';
import { LazyRoutePreloadingStrategy } from './lazy-route.preloading.strategy';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppMainComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: LazyRoutePreloadingStrategy })],
    exports: [RouterModule],
    providers: [LazyRoutePreloadingStrategy]
})
export class AppRouterModule {}
