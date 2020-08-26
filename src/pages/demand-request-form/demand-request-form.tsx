import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import { Steps } from 'antd'

const components = {
    PageContainer: styled(PageContainer)``
}
const { Step } = Steps

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
            <components.PageContainer>
                <Steps current={1} percent={60}>
                    <Step
                        title="Finished"
                        description="This is a description."
                    />
                    <Step
                        title="In Progress"
                        subTitle="Left 00:00:08"
                        description="This is a description."
                    />
                    <Step
                        title="Waiting"
                        description="This is a description."
                    />
                </Steps>
            </components.PageContainer>
        )
    }
}
