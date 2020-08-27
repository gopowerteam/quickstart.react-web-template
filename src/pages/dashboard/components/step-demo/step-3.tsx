import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import { StepComponent } from '~/core/interfaces/setp.interface'

const components = {
    Wrapper: styled.section``
}
interface Step3State {}

interface Step3Props {}

export default class Step3
    extends Component<Step3Props, Step3State>
    implements StepComponent {
    constructor(props) {
        super(props)
    }

    public render() {
        return <components.Wrapper>Step3</components.Wrapper>
    }

    public onSubmit() {
        return true
    }
}
