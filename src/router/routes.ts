import DefaultLayout from '~/layout/default/default.layout'
import WorkspaceLayout from '~/layout/workspace/workspace.layout'

import Login from '~/pages/login/login'
import Dashboard from '~/pages/dashboard/dashboard'
import APIDemandRequestList from '~/pages/api-demand-request-list/api-demand-request-list'
import DemandRequestForm from '~/pages/demand-request-form/demand-request-form'
import DemandRequestForm2 from '~/pages/demand-request-form/demand-request-form2'
import DemandRequestForm3 from '~/pages/demand-request-form/demand-request-form3'
import APIReviewRequestList from '~/pages/api-review-request-list/api-review-request-list'
import ReviewRequestForm from '~/pages/review-request-form/review-request-form'
import DemandRequestFormDetail from '~/pages/demand-request-form/demand-request-form-detail'
import APICatalogueList from '~/pages/api-catalogue-list/api-catalogue-list'
import ApiDetail from '~/pages/api-catalogue-list/api-detail'

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
        path: '/pages/api-demand-request-list',
        exact: true,
        component: APIDemandRequestList,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/pages/demand-request-form',
        exact: true,
        component: DemandRequestForm,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/pages/demand-request-form2',
        exact: true,
        component: DemandRequestForm2,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/pages/demand-request-form3',
        exact: true,
        component: DemandRequestForm3,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/pages/api-review-request-list',
        exact: true,
        component: APIReviewRequestList,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/pages/review-request-form',
        exact: true,
        component: ReviewRequestForm,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/pages/demand-request-form-detail',
        exact: true,
        component: DemandRequestFormDetail,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/pages/api-catalogue',
        exact: true,
        component: APICatalogueList,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/pages/api-catalogue/api-detail',
        exact: true,
        component: ApiDetail,
        layout: WorkspaceLayout,
        auth: true
    }
]
