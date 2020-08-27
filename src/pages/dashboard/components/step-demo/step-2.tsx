import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import { StepComponent } from '~/core/interfaces/setp.interface'

const components = {
    Wrapper: styled.section``
}
interface Step2State {}

interface Step2Props {}

export default class Step2
    extends Component<Step2Props, Step2State>
    implements StepComponent {
    constructor(props) {
        super(props)
    }

    public render() {
        return <components.Wrapper>Step2</components.Wrapper>
    }

    public onSubmit() {
        return true
    }
}
