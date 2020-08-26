import React from 'react'
import { useState } from 'react'
import { Provider as StoreProvider } from 'reto'
import { RequestParams } from '~/core/http'

export interface User {}

export function AuthStore() {
    return {}
}

export const AuthStoreProvider = props => {
    return <StoreProvider of={AuthStore}>{props.children}</StoreProvider>
}
