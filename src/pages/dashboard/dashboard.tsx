import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, message, Button } from 'antd'
import LabelContainer from '~/shared/components/label-contaoner'
import LabelItem from '~/shared/components/label-item'
import StepContainer from '~/shared/components/step-container'
import StepItem from '~/shared/components/step-item'
import Step1 from './components/step-demo/step-1'
import Step2 from './components/step-demo/step-2'
import Step3 from './components/step-demo/step-3'
import { truncate } from 'fs/promises'

const components = {
    PageContainer: styled(PageContainer)``
}

interface DashboardState {}

interface DashboardProps {}

export default class Dashboard extends Component<
    RouteComponentProps<DashboardProps>,
    DashboardState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer title="Dashboard">
                <Button block ghost>
                    asd
                </Button>
                <CardContainer title="data-from-demo" theme="dark">
                    <DataForm
                        name="demo-form"
                        labelCol={{ span: 5 }}
                        labelAlign="left"
                        actions={this.renderFormAction()}
                    >
                        <DataForm.Item name="email" label="E-mail1">
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item name="email" label="E-mail2">
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item name="email" label="E-mail3">
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item name="email" label="E-mail4">
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item name="email" label="E-mail5">
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item name="email" label="E-mail6">
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item name="email" label="E-mail7">
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item name="email" label="E-mail8">
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item name="email" label="E-mail9" collapse>
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item name="email" label="E-mail10" collapse>
                            <Input />
                        </DataForm.Item>
                    </DataForm>
                </CardContainer>
                <CardContainer title="label-container-demo">
                    <LabelContainer column={2} labelSpan={3}>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                    </LabelContainer>
                </CardContainer>
                <CardContainer title="steps-container-demo">
                    <StepContainer onSubmit={data => this.onSubmit(data)}>
                        <StepItem title="第一步" component={Step1}></StepItem>
                        <StepItem title="第二步" component={Step2}></StepItem>
                        <StepItem title="第三步" component={Step3}></StepItem>
                    </StepContainer>
                </CardContainer>
            </components.PageContainer>
        )
    }

    private renderFormAction() {
        return (
            <>
                <Button type="primary" danger>
                    Search
                </Button>
            </>
        )
    }

    private onSubmit(data) {
        console.log(123)
        message.success('提交成功')
    }
}
