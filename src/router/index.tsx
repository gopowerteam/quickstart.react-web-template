import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'

function RouterGenerate(route) {
    if (route.redirect) {
        return (
            <Route path={route.path}>
                <Redirect push to={route.redirect}></Redirect>
            </Route>
        )
    }

    return (
        <Route
            path={route.path}
            render={props => (
                <route.layout>
                    <route.component {...props} routes={route.routes} />
                </route.layout>
            )}
        />
    )
}

function RouterContainer() {
    return (
        <Switch>
            {routes.map((route, index) => (
                <RouterGenerate key={index} {...route} />
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
