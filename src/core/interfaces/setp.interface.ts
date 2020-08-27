import { Observable } from 'rxjs'
import { Component } from 'react'

export interface StepComponent<P = {}, S = {}> extends Component<P, S> {
    onSubmit: () => any
}
