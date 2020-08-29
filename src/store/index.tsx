import React, {
    useEffect,
    useContext,
    useRef,
    useState,
    useDebugValue
} from 'react'

import { UserStoreProvider, UserStore } from './user.store'
import { PageStoreProvider, PageStore } from './page.store'
import { getStoreContext, StoreV, Store } from 'reto/store'
import { Container } from 'reto/container'
import { Presist } from './plugins/persist'

const providers: any[] = [UserStoreProvider, PageStoreProvider]
const stores: any[] = [UserStore]

const ProvidersComposer = props =>
    props.providers.reduceRight(
        (children, Parent) => <Parent>{children}</Parent>,
        props.children
    )

export const Provider = props => (
    <ProvidersComposer providers={providers}>
        <Presist stores={stores}>{props.children}</Presist>
    </ProvidersComposer>
)
