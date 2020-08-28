import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import { StepComponent } from '~/core/interfaces/setp.interface'

const components = {
    Wrapper: styled.section``
}
interface AddEstimationInformationState {}

interface AddEstimationInformationProps {}

export default class AddEstimationInformation
    extends Component<
        AddEstimationInformationProps,
        AddEstimationInformationState
    >
    implements StepComponent {
    constructor(props) {
        super(props)
    }

    public render() {
        return <components.Wrapper>AddEstimationInformation</components.Wrapper>
    }

    public onSubmit() {
        return true
    }
}
