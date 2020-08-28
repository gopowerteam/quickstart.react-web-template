import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Provider as StoreProvider } from 'reto'
import { RequestParams } from '~/core/http'
import { PersistState } from './plugins/persist'

export interface User {}

export function UserStore() {
    const [state, setState] = useState(
        PersistState('user', {
            token: ''
        } as any)
    )

    function login(value) {
        setState(value)
    }

    function logout(value) {
        setState({})
    }

    return Object.assign(
        {
            key: 'user',
            state,
            setState
        },
        { login, logout }
    )
}

export const UserStoreProvider = props => (
    <StoreProvider of={UserStore}>{props.children}</StoreProvider>
)
