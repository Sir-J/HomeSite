import { UIRouter, Category } from 'ui-router-core';
import { AuthService } from './services/auth.service'

export function routerConfigFn(router: UIRouter) {
    const transitionService = router.transitionService;
    
    const requiresAuthCriteria = {
        to: (state: any) => state.data && state.data.requiresAuth
    };

    // Function that returns a redirect for the current transition to the login state
    // if the user is not currently authenticated (according to the AuthService)

    const redirectToLogin = (transition: any) => {
        const authService: AuthService = transition.injector().get(AuthService);
        const $state = transition.router.stateService;
        if (!authService.isAuthenticated()) {
            return $state.target('login', undefined, { location: false });
        }
    };

    // Register the "requires auth" hook with the TransitionsService
    transitionService.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10});
}
