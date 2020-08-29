import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import StepContainer from '~/shared/components/step-container'
import StepItem from '~/shared/components/step-item'
import AddBasicInfomation from './components/step-form/add-basic-infomation'
import AddDetailInfomation from './components/step-form/add-detail-information'
import AddEstimationInfomation from './components/step-form/add-estimation-information'
import CardContainer from '~/shared/components/card-container'
import { Form, Input, message } from 'antd'

const components = {
    PageContainer: styled(PageContainer)``
}

interface DemandRequestFormState {}

interface DemandRequestFormProps {}

export default class DemandRequestForm extends Component<
    RouteComponentProps<DemandRequestFormProps>,
    DemandRequestFormState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer width="70%" title="Demand Request Form">
                <CardContainer title="Demand Request Form">
                    <StepContainer onSubmit={data => this.onSubmit(data)}>
                        <StepItem
                            title="Add Basic Infomation"
                            component={AddBasicInfomation}
                        ></StepItem>
                        <StepItem
                            title="Add Detail Information"
                            component={AddDetailInfomation}
                        ></StepItem>
                        <StepItem
                            title="Add Estimation Infomation"
                            component={AddEstimationInfomation}
                        ></StepItem>
                    </StepContainer>
                </CardContainer>
            </components.PageContainer>
        )
    }
    private onSubmit(data) {
        message.success('SUCCESS')
    }
}
