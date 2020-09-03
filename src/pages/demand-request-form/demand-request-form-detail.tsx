import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import {
    Form,
    Input,
    Select,
    DatePicker,
    Table,
    Divider,
    Alert,
    Button
} from 'antd'
import LabelContainer from '~/shared/components/label-contaoner'
import LabelItem from '~/shared/components/label-item'
const components = {
    PageContainer: styled(PageContainer)``,
    PageHeaderContainer: styled(PageContainer)`
        height: 60px;
        line-height: 60px;
        padding: 0 50px;
        font-size: 26px;
    `
}

interface DemandRequestFormDetailState {}

interface DemandRequestFormDetailProps {}

export default class DemandRequestFormDetail extends Component<
    RouteComponentProps<DemandRequestFormDetailProps>,
    DemandRequestFormDetailState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer title="Demand Request Detail">
                <CardContainer title="Demand Governance">
                    <LabelContainer column={2} labelSpan={8}>
                        <LabelItem label="APIName">ddddd</LabelItem>
                        <LabelItem label="Entry Creation Date">
                            05/11/2020
                        </LabelItem>
                    </LabelContainer>
                    <DataForm
                        name="demo-form"
                        column={2}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <Form.Item name="DemandName" label="Project Name">
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="OrderRecordDate"
                            label="Order Record Date"
                        >
                            <DatePicker disabled />
                        </Form.Item>
                        <Form.Item name="RequestorContact" label="Requester">
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="Country"
                            label="Country"
                            initialValue="Georgia"
                        >
                            <Select disabled>
                                <Select.Option value="Georgia">
                                    Georgia
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="CBAPIContact"
                            label="CB API Contact"
                            initialValue="Cameron Williamson"
                        >
                            <Select disabled>
                                <Select.Option value="Cameron Williamson">
                                    Cameron Williamson
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="BackendSystem"
                            label="Backend System"
                            initialValue="HUB"
                        >
                            <Select disabled>
                                <Select.Option value="HUB">HUB</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="CoreBankingSystemContact"
                            label="Core Banking System Contact"
                            initialValue="Cameron Williamson"
                        >
                            <Select disabled>
                                <Select.Option value="Cameron Williamson">
                                    Cameron Williamson
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Channels"
                            label="Channel"
                            initialValue="CMB"
                        >
                            <Select disabled>
                                <Select.Option value="CMB">CMB</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="TotalAPIL0Estimates"
                            label="Total API L0 Estimates"
                            initialValue="13.5"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="GBGF"
                            label="GB/GF"
                            initialValue="RBWM"
                        >
                            <Select disabled>
                                <Select.Option value="RBWM">RBWM</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Mule API L0 Estimates"
                            label="Mule API L0 Estimates"
                            initialValue="13.5"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="MultiCountry"
                            label="Multi-Country"
                            initialValue="N"
                        >
                            <Select disabled>
                                <Select.Option value="N">N</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="CB System L0 Estimates"
                            label="CB System L0 Estimates"
                            initialValue="13.5"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="APIlifecycleStage"
                            label="API lifecycle Stage"
                            initialValue="Production"
                        >
                            <Select disabled>
                                <Select.Option value="Production">
                                    Production
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="BPID"
                            label="BPID"
                            initialValue="903570"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="TargetLiveDate"
                            label="Target Live Date"
                        >
                            <DatePicker disabled />
                        </Form.Item>
                        {/*  <Form.Item
                            name="Consumer"
                            label="Consumer"
                            initialValue="Consumer"
                        >
                            <Input disabled />
                        </Form.Item>*/}
                    </DataForm>
                    <div
                        style={{
                            background: '#E5F2F2',
                            border: '1px solid #00847F',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div
                            style={{
                                fontSize: '18px',
                                paddingLeft: '30px',
                                paddingTop: '20px',
                                fontWeight: 500
                            }}
                            className=" flex-row justify-content-between"
                        >
                            <div> Demand Approval</div>
                            <div style={{ color: '#00847F', paddingRight: 20 }}>
                                <img
                                    src={require('~/assets/images/approved.png')}
                                ></img>
                                Approved
                            </div>
                        </div>
                        <div
                            style={{
                                fontSize: '14px',
                                paddingLeft: '30px',
                                paddingTop: '20px'
                            }}
                        >
                            <LabelContainer column={1} labelSpan={3}>
                                <LabelItem label="Reviewer:">
                                    Tony Stark
                                </LabelItem>
                                <LabelItem label="Date in Operation:">
                                    05/11/2020
                                </LabelItem>
                            </LabelContainer>
                        </div>
                        <div className="flex-row justify-content-end">
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    className="submit-button"
                                    disabled
                                    size="large"
                                >
                                    Approve
                                </Button>
                            </div>
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    className="submit-button"
                                    size="large"
                                    disabled
                                >
                                    Reject
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContainer>
                <CardContainer title=" Design Governance">
                    <DataForm
                        name="demo-form"
                        column={2}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <Form.Item
                            name="FunctionalDomain"
                            label="Functional Domain"
                            initialValue="Customer"
                        >
                            <Select disabled>
                                <Select.Option value="Customer">
                                    Customer
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="APIRefNumber"
                            label="API ID"
                            initialValue="CBIL-49560"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="Feature"
                            label="Feature"
                            initialValue="Customer Maintenance"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="Feature"
                            label="Original API ID"
                            initialValue="CBIL-49560"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="Service"
                            label="Service"
                            initialValue="Customer Createion and Service"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="FunctionalDomain"
                            label="Demand Classification"
                            initialValue="New"
                        >
                            <Select disabled>
                                <Select.Option value="New">New</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Platfrom"
                            label="Platfrom"
                            initialValue="New"
                        >
                            <Select disabled>
                                <Select.Option value="DTP">DTP</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="ReusabilityScore"
                            label="Reusability Score"
                            initialValue="100"
                        >
                            <Select disabled>
                                <Select.Option value="100">100</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Service"
                            label="Channel Agnostic"
                            initialValue="Customer & Staff Channel  Agnostic"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="Service"
                            label="Design Review Approval Status"
                            initialValue="Approved"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="APIType"
                            label="API Type"
                            initialValue="TRUE SAPI"
                        >
                            <Select disabled>
                                <Select.Option value="TRUE SAPI">
                                    TRUE SAPI
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="DesignReviewApprovalDate"
                            label="Design Review Approval Date"
                            initialValue="05/11/2020"
                        >
                            <Input disabled />
                        </Form.Item>
                    </DataForm>
                    <div
                        style={{
                            background: '#fff',
                            border: '1px solid #00847F',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div
                            className="flex-row justify-content-between"
                            style={{
                                fontSize: '18px',
                                paddingLeft: '30px',
                                paddingTop: '20px',
                                fontWeight: 500
                            }}
                        >
                            <div>Design Approval</div>

                            <div
                                style={{
                                    color: '#333333',
                                    paddingRight: 20,
                                    fontSize: '18px'
                                }}
                            >
                                <img
                                    src={require('~/assets/images/plus.png')}
                                ></img>
                                Verify
                            </div>
                        </div>

                        <div className="flex-row justify-content-end">
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="submit-button"
                                    danger
                                    size="large"
                                >
                                    Approve
                                </Button>
                            </div>
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button className="submit-button" size="large">
                                    Reject
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContainer>
                <Divider />
                <CardContainer title="Other Informationments">
                    <DataForm
                        name="demo-form"
                        column={2}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <Form.Item
                            name="TargetLiveDate"
                            label="Target Date OF Next Milestone"
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="TargetLiveDate"
                            label="Target Overall Delivery"
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="TargetLiveDate"
                            label="Next Miletone RAG Status"
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="TargetLiveDate"
                            label="Overall Delivery RAG Status"
                        >
                            <DatePicker />
                        </Form.Item>
                    </DataForm>
                    <div className="flex-row justify-content-between">
                        <div
                            style={{
                                padding: 20
                            }}
                        >
                            <Button className="submit-button" size="large">
                                Discharge
                            </Button>
                        </div>
                        <div
                            style={{
                                padding: 20
                            }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="submit-button"
                                danger
                                size="large"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </CardContainer>
            </components.PageContainer>
        )
    }

    public renderPageHeader() {
        return (
            <components.PageHeaderContainer>
                Demand Request Detail
            </components.PageHeaderContainer>
        )
    }
}
