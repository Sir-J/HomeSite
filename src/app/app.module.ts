import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { API_SERIALIZER, SimplyApiModule } from 'angular-simply-api';
import { AppRouterModule } from 'app/app.router';
import {
    AppAboutComponent,
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppMainComponent,
    LoginComponent,
} from 'app/components';
import { AuthModule, AuthTokenService, defaults } from 'app/modules/auth';
import { environment } from 'environments/environment';
import { JsTsMapper } from 'js-ts-mapper';
import { CarouselModule } from 'ngx-bootstrap';

import { AuthService, UserContextService } from './services';
import { BlockUIModule } from 'ng-block-ui';

export function jwtOptionsFactory(authTokenService: AuthTokenService) {
    return {
        tokenGetter: () => {
            return authTokenService.getToken();
        },
        whitelistedDomains: environment.whitelistedDomains
    };
}

@NgModule({
    declarations: [AppComponent, AppFooterComponent, AppHeaderComponent, LoginComponent, AppMainComponent, AppAboutComponent],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        BrowserAnimationsModule,
        CarouselModule.forRoot(),
        AuthModule.forRoot({
            stsParams: {
                client_id: 'AdminAPI',
                client_secret: 'secretPassword',
                scope: 'openid AdminApiScope offline_access'
            },
            tokenEndpoint: environment.identityServerUrl + defaults.tokenEndpoint
        }),
        SimplyApiModule.forRoot({
            endpoint: environment.apiUrl,
            serializeProvider: {
                provide: API_SERIALIZER,
                useFactory: () => new JsTsMapper()
            }
        }),
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtOptionsFactory,
                deps: [AuthTokenService]
            }
        }),
        AppRouterModule,
        BlockUIModule.forRoot()
    ],
    providers: [AuthService, UserContextService],
    bootstrap: [AppComponent]
})
export class AppModule {}
