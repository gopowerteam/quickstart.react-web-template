import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import DataTable from '~/shared/components/data-table'
import Column from 'antd/lib/table/Column'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, Select, DatePicker } from 'antd'
import dataSource from '~/assets/mock/api-data.json'
const components = {
    PageContainer: styled(PageContainer)``
}

interface APIDemandRequestListState {
    selectedRowKeys: any[]
}

interface APIDemandRequestListProps {}

export default class APIDemandRequestList extends Component<
    RouteComponentProps<APIDemandRequestListProps>,
    APIDemandRequestListState
> {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: []
        }
    }

    public render() {
        return (
            <components.PageContainer title="API Demand Request List">
                {this.renderFormContainer()}
                {this.renderTableContainer()}
            </components.PageContainer>
        )
    }

    public renderFormContainer() {
        return (
            <CardContainer title="Search">
                <DataForm
                    name="demo-form"
                    column={4}
                    labelCol={{ span: 8 }}
                    labelAlign="left"
                >
                    <Form.Item
                        name="DemandClassification"
                        label="Demand Classification"
                        initialValue="New"
                    >
                        <Select>
                            <Select.Option value="New">New</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="BackendSystem"
                        label="Back-end System"
                        initialValue="HUB"
                    >
                        <Select>
                            <Select.Option value="HUB">HUB</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="DemandApproveStatus"
                        label="Demand Approve Status"
                        initialValue="Approve"
                    >
                        <Select>
                            <Select.Option value="Approve">
                                Approve
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="DemandApproveDate"
                        label="Demand Approve Date"
                    >
                        <DatePicker renderExtraFooter={() => 'extra footer'} />
                    </Form.Item>
                    <Form.Item name="DemandName" label="Demand Name">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Channel"
                        label="Channel"
                        initialValue="CMB"
                    >
                        <Select>
                            <Select.Option value="CMB">CMB</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="DesignReviewApproval"
                        label="Design Review Approval"
                        initialValue="CMB"
                    >
                        <Select>
                            <Select.Option value="Approve">
                                Approve
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="DesignReviewApprovalDate"
                        label="Design Review Approval Date"
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="SAPIName" label="SAPI Name">
                        <Input />
                    </Form.Item>

                    <Form.Item name="GBGF" label="GB/GF" initialValue="RBWM">
                        <Select>
                            <Select.Option value="RBWM">RBWM</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="DesignApproval"
                        label="Design Approval"
                        initialValue="Approve"
                    >
                        <Select>
                            <Select.Option value="Approve">
                                Approve
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="DesignApproveDate"
                        label="Design Approve Date"
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name="RequestorContact"
                        label="Requestor Contact"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="APIlifecycleStage"
                        label="API lifecycle Stage"
                        initialValue="Production"
                    >
                        <Select>
                            <Select.Option value="Production">
                                Production
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="Platfrom"
                        label="Platfrom"
                        initialValue="DTP"
                    >
                        <Select>
                            <Select.Option value="DTP">DTP</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="TargetLiveDate" label="Target Live Date">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="SAPIRefNumber" label="SAPI Ref Number">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="CoreBankingSystemContact"
                        label="Core Banking System Contact"
                        initialValue="Cameron Williamson"
                    >
                        <Select>
                            <Select.Option value="Cameron Williamson">
                                Cameron Williamson
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="Contry"
                        label="Contry"
                        initialValue="Georgia"
                    >
                        <Select>
                            <Select.Option value="Georgia">
                                Georgia
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item></Form.Item>
                    <Form.Item
                        name="OldSAPIRefNumber"
                        label="Old SAPI Ref Number"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="OSSOverallContact"
                        label="OSS Overall Contact"
                        initialValue="Cameron Williamson"
                    >
                        <Select>
                            <Select.Option value="Cameron Williamson">
                                Cameron Williamson
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="APIType"
                        label="API Type"
                        initialValue="TRUE SAPI"
                    >
                        <Select>
                            <Select.Option value="TRUE SAPI">
                                TRUE SAPI
                            </Select.Option>
                        </Select>
                    </Form.Item>
                </DataForm>
            </CardContainer>
        )
    }

    public renderTableContainer() {
        const { selectedRowKeys } = this.state

        return (
            <CardContainer title="API Demand Request List">
                <DataTable
                    rowKey="UniqueOrderRef"
                    dataSource={dataSource}
                    rowSelection={{
                        selectedRowKeys
                    }}
                >
                    <Column
                        title="UniqueOrderRef"
                        dataIndex="UniqueOrderRef"
                        key="UniqueOrderRef"
                    />
                    <Column
                        title="EntryCreationDate"
                        dataIndex="EntryCreationDate"
                        key="EntryCreationDate"
                    />
                    <Column
                        title="OrderRecordDate"
                        dataIndex="OrderRecordDate"
                        key="OrderRecordDate"
                    />
                    <Column
                        title="DemandName"
                        dataIndex="DemandName"
                        key="DemandName"
                    />
                    <Column
                        title="SAPIName"
                        dataIndex="SAPIName"
                        key="SAPIName"
                    />
                    <Column title="Country" dataIndex="Country" key="Country" />
                    <Column
                        title="Back-endSystem"
                        dataIndex="BackEndSystem"
                        key="BackEndSystem"
                    />
                    <Column title="Channel" dataIndex="Channel" key="Channel" />
                    <Column
                        title="RequestorContact"
                        dataIndex="RequestorContact"
                        key="RequestorContact"
                    />
                    <Column
                        title="OSSOverallContact"
                        dataIndex="OSSOverallContact"
                        key="OSSOverallContact"
                    />
                    <Column
                        title="Core Banking System Contact"
                        dataIndex="CoreBankingSystemContact"
                        key="CoreBankingSystemContact"
                    />
                    <Column title="GB/GF" dataIndex="GBGF" key="GBGF" />
                    <Column
                        title="Multi-Country"
                        dataIndex="MultiCountry"
                        key="MultiCountry"
                    />
                    <Column
                        title="API lifecycle Stage"
                        dataIndex="APIlifecycleStage"
                        key="APIlifecycleStage"
                    />
                    <Column
                        title="Target Live Date"
                        dataIndex="TargetLiveDate"
                        key="TargetLiveDate"
                    />
                    <Column
                        title="Total OSS L0 Estimates"
                        dataIndex="TotalOSSL0Estimates"
                        key="TotalOSSL0Estimates"
                    />
                    <Column
                        title="OSS API L0 Estimates"
                        dataIndex="OSSAPIL0Estimates"
                        key="OSSAPIL0Estimates"
                    />
                    <Column
                        title="CBSystemL0 Estimates"
                        dataIndex="CBSystemL0Estimates"
                        key="CBSystemL0Estimates"
                    />
                    <Column
                        title="GPDM Interlock & BPID"
                        dataIndex="GPDMInterlockBPID"
                        key="GPDMInterlockBPID"
                    />
                    <Column
                        title="Demand Governance"
                        dataIndex="DemandGovernance"
                        key="DemandGovernance"
                    />
                    <Column
                        title="Platfrom"
                        dataIndex="Platfrom"
                        key="Platfrom"
                    />
                    <Column
                        title="API Type"
                        dataIndex="APIType"
                        key="APIType"
                    />
                    <Column
                        title="Functional Domain"
                        dataIndex="FunctionalDomain"
                        key="FunctionalDomain"
                    />
                    <Column title="Feature" dataIndex="Feature" key="Feature" />
                    <Column title="Service" dataIndex="Service" key="Service" />
                    <Column
                        title="Channel Agnostic"
                        dataIndex="ChannelAgnostic"
                        key="ChannelAgnostic"
                    />
                    <Column
                        title="Demand Classification"
                        dataIndex="DemandClassification"
                        key="DemandClassification"
                    />
                    <Column
                        title="Reusability Score"
                        dataIndex="ReusabilityScore"
                        key="ReusabilityScore"
                    />
                    <Column
                        title="SAPI Ref Number"
                        dataIndex="SAPIRefNumber"
                        key="SAPIRefNumber"
                    />
                    <Column
                        title="Old SAPI Ref Number"
                        dataIndex="OldSAPIRefNumber"
                        key="OldSAPIRefNumber"
                    />
                    <Column
                        title="Design Review Approval"
                        dataIndex="DesignReviewApproval"
                        key="DesignReviewApproval"
                    />
                    <Column
                        title="Design Approval"
                        dataIndex="DesignApproval"
                        key="DesignApproval"
                    />
                    <Column
                        title="Final Approval"
                        dataIndex="FinalApproval"
                        key="FinalApproval"
                    />
                    <Column
                        title="Target Date OF Next Milestone"
                        dataIndex="TargetDateOFNextMilestone"
                        key="TargetDateOFNextMilestone"
                    />
                    <Column
                        title="Next Miletone RAG Status"
                        dataIndex="NextMiletoneRAGStatus"
                        key="NextMiletoneRAGStatus"
                    />
                    <Column
                        title="Target Overall Delivery"
                        dataIndex="TargetOverallDelivery"
                        key="TargetOverallDelivery"
                    />
                    <Column
                        title="OverallDeliveryRAG Status"
                        dataIndex="OverallDeliveryRAGStatus"
                        key="OverallDeliveryRAGStatus"
                    />
                </DataTable>
            </CardContainer>
        )
    }
}
