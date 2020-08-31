import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import StepContainer from '~/shared/components/step-container'
import StepItem from '~/shared/components/step-item'
import CardContainer from '~/shared/components/card-container'
import { Form, Input, message, Select, Space, Button, Divider } from 'antd'
import DataForm from '~/shared/components/data-form'
import LabelContainer from '~/shared/components/label-contaoner'

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
                <div style={{ height: 15 }}></div>
                <img
                    width="100%"
                    src={require('~/assets/images/navigation-bar-1.png')}
                ></img>
                <div style={{ height: 15 }}></div>

                <div
                    style={{
                        textAlign: 'right',
                        color: '#333333',
                        fontSize: '14px'
                    }}
                >
                    *Required information
                </div>
                <Divider />

                <CardContainer title="Basic Information">
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
                <div className="flex-row justify-content-end">
                    <Button
                        type="primary"
                        className="submit-button"
                        size="large"
                        danger
                        onClick={() => this.openForm()}
                    >
                        Next
                    </Button>
                </div>
            </components.PageContainer>
        )
    }
    private onSubmit(data) {
        message.success('SUCCESS')
    }
    private openForm() {
        this.props.history.push('/api/demand-request-form2')
    }
}
