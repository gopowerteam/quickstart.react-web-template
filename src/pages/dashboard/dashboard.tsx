import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input } from 'antd'
import LabelContainer from '~/shared/components/label-contaoner'
import LabelItem from '~/shared/components/label-item'

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
                <CardContainer title="data-from-demo">
                    <DataForm
                        name="demo-form"
                        labelCol={{ span: 5 }}
                        labelAlign="left"
                    >
                        <Form.Item name="email" label="E-mail1">
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="E-mail2">
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="E-mail3">
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="E-mail4">
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="E-mail5">
                            <Input />
                        </Form.Item>
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
            </components.PageContainer>
        )
    }
}
