import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import { StepComponent } from '~/core/interfaces/setp.interface'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, Select, DatePicker } from 'antd'

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
        return (
            <components.Wrapper>
                <CardContainer title="Basic Information" theme="dark">
                    <DataForm
                        name="demo-form"
                        column={1}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <Form.Item
                            name="DemandClassification"
                            label="Demand Classification*"
                            initialValue="New"
                        >
                            <Select>
                                <Select.Option value="New">New</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="APIName" label="API Name*">
                            <Input />
                        </Form.Item>
                    </DataForm>
                </CardContainer>
                <CardContainer title="Detail Information" theme="dark">
                    <DataForm
                        name="demo-form"
                        column={1}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <Form.Item name="Requestor" label="Requestor*">
                            <Input />
                        </Form.Item>
                        <Form.Item name="ProjectName" label="Project Name*">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Country"
                            label="Country*"
                            initialValue="China"
                        >
                            <Select>
                                <Select.Option value="China">
                                    China
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </DataForm>
                </CardContainer>
            </components.Wrapper>
        )
    }

    public onSubmit() {
        return true
    }
}
