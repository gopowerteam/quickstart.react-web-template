import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import {
    Input,
    InputNumber,
    message,
    Select,
    DatePicker,
    Button,
    Form
} from 'antd'
import DataForm from '~/shared/components/data-form'
import CardContainer from '~/shared/components/card-container'

const components = {
    PageContainer: styled(PageContainer)``
}

interface DemandRequestForm3State {
    discharge: boolean
}

interface DemandRequestForm3Props {}

export default class DemandRequestForm3 extends Component<
    RouteComponentProps<DemandRequestForm3Props>,
    DemandRequestForm3State
> {
    private dataFromRef!: React.RefObject<DataForm>

    constructor(props) {
        super(props)
        this.dataFromRef = React.createRef()

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
                    src={require('~/assets/images/navigation-bar-3.png')}
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
                        onValuesChange={this.onFormValueChange.bind(this)}
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
                <CardContainer title="Detail Information" theme="dark">
                    <DataForm
                        name="demo-form"
                        column={1}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <Form.Item name="Requestor" label="Requestor*">
                            <Input disabled={discharge} />
                        </Form.Item>
                        <Form.Item name="ProjectName" label="Project Name*">
                            <Input disabled={discharge} />
                        </Form.Item>
                        <Form.Item
                            name="Country"
                            label="Country*"
                            initialValue="China"
                        >
                            <Select disabled={discharge}>
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
                            <Select disabled={discharge}>
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
                            <Select disabled={discharge}>
                                <Select.Option value="HUB">HUB</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Channels"
                            label="Channels*"
                            initialValue="ACD"
                        >
                            <Select disabled={discharge}>
                                <Select.Option value="ACD">ACD</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="Consumer" label="Consumer*">
                            <Input disabled={discharge} />
                        </Form.Item>
                        <Form.Item
                            name="GBGF"
                            label="GB/GF*"
                            initialValue="GFRF"
                        >
                            <Select disabled={discharge}>
                                <Select.Option value="GFRF">GFRF</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="CBAPIContact"
                            label="CB API Contact*"
                            initialValue="Ash Zeng"
                        >
                            <Select disabled={discharge}>
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
                            <Select disabled={discharge}>
                                <Select.Option value="Vivian Li">
                                    Vivian Li
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="TargetLiveDate"
                            label="Target Live Date*"
                        >
                            <DatePicker disabled={discharge} />
                        </Form.Item>
                        <Form.Item name="BPID" label="BPID*">
                            <Input disabled={discharge} />
                        </Form.Item>
                    </DataForm>
                </CardContainer>
                <CardContainer title="Estimation Information">
                    <DataForm
                        ref={this.dataFromRef}
                        name="estimateForm"
                        column={1}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                        onValuesChange={this.onFormValueChange.bind(this)}
                    >
                        <Form.Item
                            name="MuleAPIL0Estimates"
                            label="Mule API L0 Estimates*"
                            initialValue={0}
                        >
                            <InputNumber
                                formatter={value =>
                                    `$ ${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ','
                                    )
                                }
                            />
                        </Form.Item>
                        <Form.Item label="+"></Form.Item>
                        <Form.Item
                            name="CBSystemsL0Estimates"
                            label="CB Systems L0 Estimates*"
                            initialValue={0}
                        >
                            <InputNumber
                                min={0}
                                formatter={value =>
                                    `$ ${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ','
                                    )
                                }
                            />
                        </Form.Item>
                        <Form.Item label="="></Form.Item>
                        <Form.Item
                            name="TotalL0Estimates"
                            label="Total API L0 Estimates*"
                            initialValue={0}
                        >
                            {/* <div>${totalApiL0Estimates}</div> */}
                            <InputNumber
                                formatter={value =>
                                    `$ ${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ','
                                    )
                                }
                                readOnly={true}
                            />
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
                        Submit
                    </Button>
                </div>
            </components.PageContainer>
        )
    }

    private get dataForm(): DataForm {
        return this.dataFromRef.current as DataForm
    }

    private openForm() {
        this.props.history.push('/pages/demand-request-form3')
    }

    private discharge() {
        this.setState({
            discharge: false
        })
    }

    private onFormValueChange(changeValue, values) {
        this.dataForm.formInstance.setFieldsValue({
            values,
            TotalL0Estimates:
                values.CBSystemsL0Estimates + values.MuleAPIL0Estimates
        })
    }
}
