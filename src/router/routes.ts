import DefaultLayout from '~/layout/default/default.layout'
import WorkspaceLayout from '~/layout/workspace/workspace.layout'

import Login from '~/pages/login/login'
import Dashboard from '~/pages/dashboard/dashboard'
import Page1 from '~/pages/page1/page1'

export const routes = [
    { path: '/', exact: true, redirect: '/login' },
    {
        path: '/login',
        exact: true,
        component: Login,
        layout: DefaultLayout,
        auth: false
    },
    {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/api/page1',
        exact: true,
        component: Page1,
        layout: WorkspaceLayout,
        auth: true
    }
]
