import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'app/modules/auth';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from 'ngx-toastr';
import { Subject, throwError } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements AfterViewInit, OnDestroy {
    public userName: string;
    public password: string;

    private ngUnsubscribe: Subject<void> = new Subject<void>();
    @BlockUI()
    blockUI: NgBlockUI;

    constructor(private authService: AuthService<User>, private router: Router, private toastr: ToastrService) {}

    login(): void {
        this.blockUI.start('Авторизуемся ...');
        this.authService
            .login(this.userName, this.password)
            .pipe(
                takeUntil(this.ngUnsubscribe),
                catchError(error => {
                    if (error && error.status === 400) {
                        this.toastr.error('Ошибка авторизации');
                    } else {
                        if (error) {
                            this.toastr.error('Ошибка авторизации');
                        }
                    }
                    this.blockUI.stop();
                    return throwError(error);
                })
            )
            .subscribe(() => {
                if (
                    this.router['currentUrlTree'] &&
                    this.router['currentUrlTree'].queryParams &&
                    this.router['currentUrlTree'].queryParams.redirectUrl
                ) {
                    this.blockUI.start('Авторизация прошла успешно');
                    window.location.href = decodeURIComponent(this.router['currentUrlTree'].queryParams.redirectUrl);
                } else {
                    this.router.navigateByUrl('/');
                }
            });
    }

    ngAfterViewInit() {
        $('body').addClass('gray-bg');
    }
    ngOnDestroy() {
        $('body').removeClass('gray-bg');
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
