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
                <CardContainer title="Estimation Information">
                    <DataForm
                        name="demo-form"
                        column={1}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <Form.Item
                            name="MuleAPIL0Estimates"
                            label="Mule API L0 Estimates*"
                            initialValue="$"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="APIName" label="API Name*">
                            <Input />
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
