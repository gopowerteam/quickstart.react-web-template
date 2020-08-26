import DefaultLayout from '~/layout/default/default.layout'
import WorkspaceLayout from '~/layout/workspace/workspace.layout'

import Login from '~/pages/login/login'
import Dashboard from '~/pages/dashboard/dashboard'

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
    }
]
