const router = [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            path: '/user/login',
            name: 'login',
            component: './User/login',
          },
          {
            path: '/user',
            redirect: '/user/login',
          },
          {
            name: 'register-result',
            icon: 'smile',
            path: '/user/register-result',
            component: './user/register-result',
          },
          {
            name: 'register',
            icon: 'smile',
            path: '/user/register',
            component: './user/register',
          },
          {
            component: '404',
          },
        ],
      },
      // {
      //   path: '/home',
      //   component: '../layouts/BasicLayout',
      //   routes: [
      //     {
      //       name: 'home',
      //       component: './home/basic-index',
      //     },
      //   ],
      // },
      {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/home/basic-index',
          },
          {
            path: '/home',
            name: 'home',
            routes: [
              {
                path: '/',
                redirect: '/home/basic-index',
              },
              {
                component: './home/basic-index',
              },
            ],
          },
          // {
          //   path: '/home',
          //   name: 'home',
          //   component: './home/basic-index',
          // },
          // {
          //   path: '/dashboard',
          //   name: 'dashboard',
          //   routes: [
          //     {
          //       path: '/',
          //       redirect: '/dashboard/analysis',
          //     },
          //     {
          //       component: './dashboard/analysis'
          //     }
          //   ],
          // },
          {
            path: '/form',
            // icon: 'form',
            name: 'form',
            routes: [
              {
                path: '/form',
                redirect: '/form/basic-form',
              },
              {
                name: 'basic-form',
                icon: 'smile',
                path: '/form/basic-form',
                component: './form/basic-form',
              },
              {
                name: 'step-form',
                icon: 'smile',
                path: '/form/step-form',
                component: './form/step-form',
              },
              {
                name: 'advanced-form',
                icon: 'smile',
                path: '/form/advanced-form',
                component: './form/advanced-form',
              },
            ],
          },
          {
            path: '/list',
            // icon: 'table',
            name: 'list',
            routes: [
              {
                path: '/list',
                redirect: '/list/business-background',
              },
              {
                path: '/list/business-background',
                name: 'business-background',
                component: './list/business-background',
                routes: [
                  {
                    path: '/list/business-background',
                    redirect: '/list/business-background/call-originator',
                  },
                  {
                    name: 'call-originator',
                    icon: 'smile',
                    path: '/list/business-background/call-originator',
                    component: './list/business-background/call-originator',
                  },
                  {
                    name: 'requestHeader-format',
                    icon: 'smile',
                    path: '/list/business-background/requestHeader-format',
                    component: './list/business-background/requestHeader-format',
                  },
                  {
                    name: 'errorCode-set',
                    icon: 'smile',
                    path: '/list/business-background/errorCode-set',
                    component: './list/business-background/errorCode-set',
                  },
                ],
              },
              {
                path: '/list/authorization-interface',
                name: 'authorization-interface',
                component: './list/authorization-interface',
                routes: [
                  {
                    path: '/list/authorization-interface',
                    redirect: '/list/authorization-interface/queryFor-authorization',
                  },
                  {
                    name: 'queryFor-authorization',
                    icon: 'smile',
                    path: '/list/authorization-interface/queryFor-authorization',
                    component: './list/authorization-interface/queryFor-authorization',
                  },
                  {
                    name: 'modifyUserAuthorization-status',
                    icon: 'smile',
                    path: '/list/authorization-interface/modifyUserAuthorization-status',
                    component: './list/authorization-interface/modifyUserAuthorization-status',
                  },
                  {
                    name: 'get-requestcode',
                    icon: 'smile',
                    path: '/list/authorization-interface/get-requestcode',
                    component: './list/authorization-interface/get-requestcode',
                  },
                ],
              },
              {
                path: '/list/oAuth',
                name: 'oAuth',
                component: './list/oAuth',
                routes: [
                  {
                    path: '/list/oAuth',
                    redirect: '/list/oAuth/encryption-rules',
                  },
                  {
                    name: 'encryption-rules',
                    icon: 'smile',
                    path: '/list/oAuth/encryption-rules',
                    component: './list/oAuth/encryption-rules',
                  },
                  {
                    name: 'get-accessToken',
                    icon: 'smile',
                    path: '/list/oAuth/get-accessToken',
                    component: './list/oAuth/get-accessToken',
                  },
                  {
                    name: 'refresh-accessToken',
                    icon: 'smile',
                    path: '/list/oAuth/refresh-accessToken',
                    component: './list/oAuth/refresh-accessToken',
                  },
                  {
                    name: 'check-accessToken',
                    icon: 'smile',
                    path: '/list/oAuth/check-accessToken',
                    component: './list/oAuth/check-accessToken',
                  },
                  {
                    name: 'get-userAccessToken',
                    icon: 'smile',
                    path: '/list/oAuth/get-userAccessToken',
                    component: './list/oAuth/get-userAccessToken',
                  },
                ],
              },
              {
                path: '/list/openApi',
                name: 'openApi',
                component: './list/openApi',
                routes: [
                  {
                    path: '/list/openApi',
                    redirect: '/list/openApi/get-userInfo',
                  },
                  {
                    name: 'get-userInfo',
                    icon: 'smile',
                    path: '/list/openApi/get-userInfo',
                    component: './list/openApi/get-userInfo',
                  },
                ],
              },
              {
                name: 'authorization-interface',
                icon: 'smile',
                path: '/list/basic-list',
                component: './list/basic-list',
              },
              {
                name: 'card-list',
                icon: 'smile',
                path: '/list/card-list',
                component: './list/card-list',
              },
            ],
          },
          {
            path: '/profile',
            name: 'profile',
            // icon: 'profile',
            routes: [
              {
                path: '/profile/jsbridge',
                redirect: '/profile/jsbridge',
              },
              {
                name: 'jsbridge',
                path: '/profile',
                component: './profile/jsbridge',
              },
              {
                name: 'basic',
                icon: 'smile',
                path: '/profile/basic',
                component: './profile/basic',
              },
              {
                name: 'advanced',
                icon: 'smile',
                path: '/profile/advanced',
                component: './profile/advanced',
              },
            ],
          },
          {
            path: '/account',
            name: 'account',
            // icon: 'user',
            routes: [
              {
                path: '/account',
                redirect: '/account/center',
              },
              {
                name: 'center',
                icon: 'smile',
                path: '/account/center',
                component: './account/center',
              },
              {
                name: 'settings',
                icon: 'smile',
                path: '/account/settings',
                component: './account/settings',
              },
            ],
          },
          {
            component: '404',
          },
        ],
      },
    ],
  },
];

module.exports = router;
