import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input } from 'antd'

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
                <CardContainer title="dashboard">
                    <DataForm name="demo-form">
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
            </components.PageContainer>
        )
    }
}
