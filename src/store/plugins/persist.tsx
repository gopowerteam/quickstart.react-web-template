import React, {
    useContext,
    useRef,
    useDebugValue,
    useState,
    useEffect
} from 'react'
import { getStoreContext, StoreV, Store } from 'reto/store'
import { Container } from 'reto/container'
import { UserStore } from '../user.store'

export function createWebStorage(type: string) {
    let storage = localStorage

    return {
        getItem: (key: string): Promise<string> => {
            return new Promise((resolve, reject) => {
                resolve(storage.getItem(key) || '')
            })
        },
        setItem: (key: string, item: string): Promise<void> => {
            return new Promise((resolve, reject) => {
                resolve(storage.setItem(key, item))
            })
        },
        removeItem: (key: string): Promise<void> => {
            return new Promise((resolve, reject) => {
                resolve(storage.removeItem(key))
            })
        }
    }
}

export const Presist = props => {
    const key = props.key
    const stores = props.stores

    const states = stores.map(store => useStore(store))

    return <>{props.children}</>
}

export function useStore<S extends Store>(s: S) {
    const Context = getStoreContext(s)
    const container = useContext(Context) as Container<StoreV<S>>
    const [state, setState] = useState<StoreV<S>>(container.state as any)

    useEffect(() => {
        const subscriber = () => {
            const {
                state: { state, key, setState }
            } = container as any
            const store = JSON.parse(
                localStorage.getItem('react-storage') || '{}'
            )
            const storeObject = Object.assign(store, { [key]: state })
            localStorage.setItem('react-storage', JSON.stringify(storeObject))
        }

        container.subscribers.add(subscriber)
        return () => {
            container.subscribers.delete(subscriber)
        }
    }, [])

    return state
}

export function PersistState<T>(key, state: T): T {
    const data = JSON.parse(localStorage.getItem('react-storage') || '{}')
    return Object.assign(state, data[key])
}
