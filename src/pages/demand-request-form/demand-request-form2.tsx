import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import StepContainer from '~/shared/components/step-container'
import StepItem from '~/shared/components/step-item'
import CardContainer from '~/shared/components/card-container'
import { Form, Input, message, Select, Space, DatePicker, Button } from 'antd'
import DataForm from '~/shared/components/data-form'

const components = {
    PageContainer: styled(PageContainer)``
}

interface DemandRequestForm2State {
    discharge: boolean
}

interface DemandRequestForm2Props {}

export default class DemandRequestForm2 extends Component<
    RouteComponentProps<DemandRequestForm2Props>,
    DemandRequestForm2State
> {
    constructor(props) {
        super(props)
        this.state = {
            discharge: true
        }
    }

    public render() {
        const { discharge } = this.state

        return (
            <components.PageContainer width="70%" title="Demand Request Form">
                <div style={{ height: 15 }}></div>

                <img
                    width="100%"
                    src={require('~/assets/images/navigation-bar-2.png')}
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
                            <Select disabled={discharge}>
                                <Select.Option value="New">New</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="APIName" label="API Name*">
                            <Input disabled={discharge} />
                        </Form.Item>
                    </DataForm>
                </CardContainer>
                <CardContainer title="Detail Information">
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
                        <Form.Item
                            name="Region"
                            label="Region*"
                            initialValue="China"
                        >
                            <Select>
                                <Select.Option value="China">
                                    China
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="BackendSystem"
                            label="Backend System*"
                            initialValue="HUB"
                        >
                            <Select>
                                <Select.Option value="HUB">HUB</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Channels"
                            label="Channels*"
                            initialValue="ACD"
                        >
                            <Select>
                                <Select.Option value="ACD">ACD</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="Consumer" label="Consumer*">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="GBGF"
                            label="GB/GF*"
                            initialValue="GFRF"
                        >
                            <Select>
                                <Select.Option value="GFRF">GFRF</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="CBAPIContact"
                            label="CB API Contact*"
                            initialValue="Ash Zeng"
                        >
                            <Select>
                                <Select.Option value="Ash Zeng">
                                    Ash Zeng
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="CoreBankingSystemContact"
                            label="Core Banking System Contact*"
                            initialValue="Vivian Li"
                        >
                            <Select>
                                <Select.Option value="Vivian Li">
                                    Vivian Li
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="TargetLiveDate"
                            label="Target Live Date*"
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item name="BPID" label="BPID*">
                            <Input />
                        </Form.Item>
                    </DataForm>
                </CardContainer>

                <div className="flex-row justify-content-between">
                    <Button size="large" onClick={() => this.discharge()}>
                        Discharge
                    </Button>
                    <Button
                        type="primary"
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

    private discharge() {
        this.setState({
            discharge: false
        })
    }
    private onSubmit(data) {
        message.success('SUCCESS')
    }
    private openForm() {
        this.props.history.push('/pages/demand-request-form3')
    }
}
