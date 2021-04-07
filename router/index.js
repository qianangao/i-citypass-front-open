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
            redirect: '/dashboard/analysis',
          },
          {
            path: '/home',
            name: 'home',
            component: './home/basic-index',
          },
          {
            path: '/dashboard',
            name: 'dashboard',
            // icon: 'dashboard',
            routes: [
              {
                path: '/',
                redirect: '/dashboard/analysis',
              },
              {
                // name: 'analysis',
                // icon: 'smile',
                // path: '/dashboard/analysis',
                component: './dashboard/analysis',
              },
              // {
              //   name: 'monitor',
              //   icon: 'smile',
              //   path: '/dashboard/monitor',
              //   component: './dashboard/monitor',
              // },
              // {
              //   name: 'workplace',
              //   icon: 'smile',
              //   path: '/dashboard/workplace',
              //   component: './dashboard/workplace',
              // },
            ],
          },
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
                // component: './list/authorization-interface',
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
                path: '/profile',
                redirect: '/profile/basic',
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
            path: '/result',
            name: 'result',
            // icon: 'CheckCircleOutlined',
            routes: [
              {
                path: '/result',
                redirect: '/result/success',
              },
              {
                name: 'success',
                icon: 'smile',
                path: '/result/success',
                component: './result/success',
              },
              {
                name: 'fail',
                icon: 'smile',
                path: '/result/fail',
                component: './result/fail',
              },
            ],
          },
          {
            path: '/exception',
            name: 'exception',
            // icon: 'warning',
            routes: [
              {
                path: '/exception',
                redirect: '/exception/403',
              },
              {
                name: '403',
                icon: 'smile',
                path: '/exception/403',
                component: './exception/403',
              },
              {
                name: '404',
                icon: 'smile',
                path: '/exception/404',
                component: './exception/404',
              },
              {
                name: '500',
                icon: 'smile',
                path: '/exception/500',
                component: './exception/500',
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
            path: '/editor',
            name: 'editor',
            // icon: 'highlight',
            routes: [
              {
                path: '/editor',
                redirect: '/editor/flow',
              },
              {
                name: 'flow',
                icon: 'smile',
                path: '/editor/flow',
                component: './editor/flow',
              },
              {
                name: 'mind',
                icon: 'smile',
                path: '/editor/mind',
                component: './editor/mind',
              },
              {
                name: 'koni',
                icon: 'smile',
                path: '/editor/koni',
                component: './editor/koni',
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
