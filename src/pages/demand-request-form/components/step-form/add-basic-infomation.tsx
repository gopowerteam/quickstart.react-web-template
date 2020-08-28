import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import { StepComponent } from '~/core/interfaces/setp.interface'

const components = {
    Wrapper: styled.section``
}

interface AddBasicInfomationState {}

interface AddBasicInfomationProps {}

export default class AddBasicInfomation
    extends Component<AddBasicInfomationProps, AddBasicInfomationState>
    implements StepComponent {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.Wrapper>
                this is AddBasicInfomation page
            </components.Wrapper>
        )
    }

    public onSubmit() {
        return true
    }
}
