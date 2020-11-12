import Vue from 'vue';
import Router from 'vue-router';
import TakeSurvey from '@/components/TakeSurvey';
import Login from '@/components/Login/';
import SignUp from '@/components/SignUp/';
import ForgotPassword from '@/components/ForgotPassword/';
import Profile from '@/components/Profile';
import Landing from '@/components/Landing';
import Applet from '@/components/Applet';
import AppletParentRoute from '@/components/AppletParentRoute';
import AppletDashboard from '@/components/AppletDashboard';
import AllApplets from '@/components/AllApplets';
import Consent from '@/components/Consent';
import Invitation from '@/components/Invitation/Invitation';
import AcceptInvitation from '@/components/Invitation/AcceptInvitation';
import DeclineInvitation from '@/components/Invitation/DeclineInvitation';
import Settings from '@/components/Settings';
import SetPassword from '@/components/SetPassword';
import config from '../config';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/allapplets',
      name: 'AllApplets',
      component: AllApplets,
    },
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/consent/:inviteURL',
      name: 'Consent',
      component: Consent,
    },
    {
      path: '/applet',
      name: 'AppletParentRoute',
      component: AppletParentRoute,
      children: [
        {
          name: 'Applet',
          path: '/applet/:appletId',
          component: Applet,
        },
        {
          name: 'AppletDashboard',
          path: '/applet/:appletId/dashboard',
          component: AppletDashboard,
        },
        {
          path: '/applet/:appletId/survey/:surveyId',
          name: 'TakeSurvey',
          component: TakeSurvey,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: {
        apiHost: config.apiHost,
        signupLink: { name: 'SignUp' },
        forgotLink: { name: 'ForgotPassword' },
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      props: {
        apiHost: config.apiHost,
        loginLink: { name: 'Login' },
      },
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: ForgotPassword,
      props: {
        apiHost: config.apiHost,
        loginLink: { name: 'Login' },
      },
    },
    {
      path: '/useraccount/:userId/token/:temporaryToken',
      name: 'SetPassword',
      component: SetPassword,
      props: {
        apiHost: config.apiHost,
        loginLink: { name: 'Login' },
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      props: {
        apiHost: config.apiHost,
      },
    },
    {
      path: '/invitation/:invitationId',
      name: 'Invitation',
      component: Invitation,
    },
    {
      path: '/invitation/:invitationId/accept',
      name: 'Invitation',
      component: AcceptInvitation,
    },
    {
      path: '/invitation/:invitationId/decline',
      name: 'Invitation',
      component: DeclineInvitation,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   // ...
// });

export default router;
