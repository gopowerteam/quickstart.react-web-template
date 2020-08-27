import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import { StepComponent } from '~/core/interfaces/setp.interface'

const components = {
    Wrapper: styled.section``
}

interface Step1State {}

interface Step1Props {}

export default class Step1
    extends Component<Step1Props, Step1State>
    implements StepComponent {
    constructor(props) {
        super(props)
    }

    public render() {
        return <components.Wrapper>this is step1 page</components.Wrapper>
    }

    public onSubmit() {
        return true
    }
}
