import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component'

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
export const appState = {
  name: 'app',
  redirectTo: 'main',
  component: AppComponent,
};

export const loginState = {
  name: 'login',
  url: '/login',
  component: LoginComponent
};

/*
 * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
 * can be matched to the URL.
 */
export const mainState = {
    parent: 'app',
    name: 'main',
    url: '/index',
    component: MainComponent
};

export const aboutState = {
    parent: 'app',
    name: 'about',
    url: '/about',
    component: AboutComponent
};

export const APP_STATES = [
    appState,
    loginState,    

    aboutState,
    mainState
];