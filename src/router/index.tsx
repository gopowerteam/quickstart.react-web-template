import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'
import { UserStore } from '~/store/user.store'
import { useStore } from 'reto'

function RouterGenerate(route) {
    if (route.redirect) {
        return (
            <Route path={route.path}>
                <Redirect push to={route.redirect}></Redirect>
            </Route>
        )
    }

    if (route.auth && !route.token) {
        return (
            <Route path={route.path}>
                <Redirect push to="/login"></Redirect>
            </Route>
        )
    }

    return (
        <Route
            path={route.path}
            render={props => (
                <route.layout {...props}>
                    <route.component {...props} routes={route.routes} />
                </route.layout>
            )}
        />
    )
}

function RouterContainer() {
    const userStore = useStore(UserStore)
    const token = userStore.state.token
    return (
        <Switch>
            {routes.map((route, index) => (
                <RouterGenerate key={index} {...route} token={token} />
            ))}
        </Switch>
    )
}

export function Router() {
    return (
        <BrowserRouter>
            <RouterContainer></RouterContainer>
        </BrowserRouter>
    )
}
