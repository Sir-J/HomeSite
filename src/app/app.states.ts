import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { LoginComponent } from './login/login.component'
import { NewsComponent } from './news/news.component'

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
    component: AppMainComponent
};

export const aboutState = {
    parent: 'app',
    name: 'about',
    url: '/about',
    component: AppAboutComponent
};

export const newsState = {
    parent: 'app',
    name: 'news',
    url: '/news',
    component: NewsComponent
};

export const APP_STATES = [
    appState,
    loginState,    

    aboutState,
    mainState,
    newsState
];