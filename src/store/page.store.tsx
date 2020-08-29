import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Provider as StoreProvider } from 'reto'
import { RequestParams } from '~/core/http'
import { PersistState } from './plugins/persist'

export interface User {}

export function PageStore() {
    const [state, setState] = useState({
        title: ''
    })

    function updateTitle(title) {
        setState({
            title
        })
    }

    return Object.assign(
        {
            key: 'page',
            state,
            setState
        },
        { updateTitle }
    )
}

export const PageStoreProvider = props => (
    <StoreProvider of={PageStore}>{props.children}</StoreProvider>
)
