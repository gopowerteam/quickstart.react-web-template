import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import { StepComponent } from '~/core/interfaces/setp.interface'

const components = {
    Wrapper: styled.section``
}
interface AddDetailInformationState {}

interface AddDetailInformationProps {}

export default class AddDetailInformation
    extends Component<AddDetailInformationProps, AddDetailInformationState>
    implements StepComponent {
    constructor(props) {
        super(props)
    }

    public render() {
        return <components.Wrapper>AddDetailInformation</components.Wrapper>
    }

    public onSubmit() {
        return true
    }
}
