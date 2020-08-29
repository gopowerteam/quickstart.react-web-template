import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import DataTable from '~/shared/components/data-table'
import Column from 'antd/lib/table/Column'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, Select, DatePicker, Button } from 'antd'
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
                    actions={this.renderFormAction()}
                >
                    <DataForm.Item
                        name="DemandClassification"
                        label="Demand Classification"
                        initialValue="New"
                    >
                        <Select>
                            <Select.Option value="New">New</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="BackendSystem"
                        label="Back-end System"
                        initialValue="HUB"
                    >
                        <Select>
                            <Select.Option value="HUB">HUB</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DemandApproveStatus"
                        label="Demand Approve Status"
                        initialValue="Approve"
                    >
                        <Select>
                            <Select.Option value="Approve">
                                Approve
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DemandApproveDate"
                        label="Demand Approve Date"
                    >
                        <DatePicker renderExtraFooter={() => 'extra footer'} />
                    </DataForm.Item>
                    <DataForm.Item name="DemandName" label="Demand Name">
                        <Input />
                    </DataForm.Item>
                    <DataForm.Item
                        name="Channel"
                        label="Channel"
                        initialValue="CMB"
                    >
                        <Select>
                            <Select.Option value="CMB">CMB</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DesignReviewApproval"
                        label="Design Review Approval"
                        initialValue="CMB"
                    >
                        <Select>
                            <Select.Option value="Approve">
                                Approve
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DesignReviewApprovalDate"
                        label="Design Review Approval Date"
                        collapse
                    >
                        <DatePicker />
                    </DataForm.Item>
                    <DataForm.Item name="SAPIName" label="SAPI Name" collapse>
                        <Input />
                    </DataForm.Item>

                    <DataForm.Item
                        name="GBGF"
                        label="GB/GF"
                        initialValue="RBWM"
                        collapse
                    >
                        <Select>
                            <Select.Option value="RBWM">RBWM</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DesignApproval"
                        label="Design Approval"
                        initialValue="Approve"
                        collapse
                    >
                        <Select>
                            <Select.Option value="Approve">
                                Approve
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="DesignApproveDate"
                        label="Design Approve Date"
                        collapse
                    >
                        <DatePicker />
                    </DataForm.Item>
                    <DataForm.Item
                        name="RequestorContact"
                        label="Requestor Contact"
                        collapse
                    >
                        <Input />
                    </DataForm.Item>
                    <DataForm.Item
                        name="APIlifecycleStage"
                        label="API lifecycle Stage"
                        initialValue="Production"
                        collapse
                    >
                        <Select>
                            <Select.Option value="Production">
                                Production
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="Platfrom"
                        label="Platfrom"
                        initialValue="DTP"
                        collapse
                    >
                        <Select>
                            <Select.Option value="DTP">DTP</Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="TargetLiveDate"
                        label="Target Live Date"
                        collapse
                    >
                        <DatePicker />
                    </DataForm.Item>
                    <DataForm.Item
                        name="SAPIRefNumber"
                        label="SAPI Ref Number"
                        collapse
                    >
                        <Input />
                    </DataForm.Item>
                    <DataForm.Item
                        name="CoreBankingSystemContact"
                        label="Core Banking System Contact"
                        initialValue="Cameron Williamson"
                        collapse
                    >
                        <Select>
                            <Select.Option value="Cameron Williamson">
                                Cameron Williamson
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="Contry"
                        label="Contry"
                        initialValue="Georgia"
                        collapse
                    >
                        <Select>
                            <Select.Option value="Georgia">
                                Georgia
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item collapse></DataForm.Item>
                    <DataForm.Item
                        name="OldSAPIRefNumber"
                        label="Old SAPI Ref Number"
                        collapse
                    >
                        <Input />
                    </DataForm.Item>

                    <DataForm.Item
                        name="OSSOverallContact"
                        label="OSS Overall Contact"
                        initialValue="Cameron Williamson"
                        collapse
                    >
                        <Select>
                            <Select.Option value="Cameron Williamson">
                                Cameron Williamson
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
                    <DataForm.Item
                        name="APIType"
                        label="API Type"
                        initialValue="TRUE SAPI"
                        collapse
                    >
                        <Select>
                            <Select.Option value="TRUE SAPI">
                                TRUE SAPI
                            </Select.Option>
                        </Select>
                    </DataForm.Item>
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
                        ellipsis={true}
                    />
                    <Column
                        title="EntryCreationDate"
                        dataIndex="EntryCreationDate"
                        key="EntryCreationDate"
                        ellipsis={true}
                    />
                    <Column
                        title="OrderRecordDate"
                        dataIndex="OrderRecordDate"
                        key="OrderRecordDate"
                        ellipsis={true}
                    />
                    <Column
                        title="DemandName"
                        dataIndex="DemandName"
                        key="DemandName"
                        ellipsis={true}
                    />
                    <Column
                        title="SAPIName"
                        dataIndex="SAPIName"
                        key="SAPIName"
                        ellipsis={true}
                    />
                    <Column
                        title="Country"
                        dataIndex="Country"
                        key="Country"
                        ellipsis={true}
                    />
                    <Column
                        title="Back-endSystem"
                        dataIndex="BackEndSystem"
                        key="BackEndSystem"
                        ellipsis={true}
                    />
                    <Column
                        title="Channel"
                        dataIndex="Channel"
                        key="Channel"
                        ellipsis={true}
                    />
                    <Column
                        title="RequestorContact"
                        dataIndex="RequestorContact"
                        key="RequestorContact"
                        ellipsis={true}
                    />
                    <Column
                        title="OSSOverallContact"
                        dataIndex="OSSOverallContact"
                        key="OSSOverallContact"
                        ellipsis={true}
                    />
                    <Column
                        title="Core Banking System Contact"
                        dataIndex="CoreBankingSystemContact"
                        key="CoreBankingSystemContact"
                        ellipsis={true}
                    />
                    <Column
                        title="GB/GF"
                        dataIndex="GBGF"
                        key="GBGF"
                        ellipsis={true}
                    />
                    <Column
                        title="Multi-Country"
                        dataIndex="MultiCountry"
                        key="MultiCountry"
                        ellipsis={true}
                    />
                    <Column
                        title="API lifecycle Stage"
                        dataIndex="APIlifecycleStage"
                        key="APIlifecycleStage"
                        ellipsis={true}
                    />
                    <Column
                        title="Target Live Date"
                        dataIndex="TargetLiveDate"
                        key="TargetLiveDate"
                        ellipsis={true}
                    />
                    <Column
                        title="Total OSS L0 Estimates"
                        dataIndex="TotalOSSL0Estimates"
                        key="TotalOSSL0Estimates"
                        ellipsis={true}
                    />
                    <Column
                        title="OSS API L0 Estimates"
                        dataIndex="OSSAPIL0Estimates"
                        key="OSSAPIL0Estimates"
                        ellipsis={true}
                    />
                    <Column
                        title="CBSystemL0 Estimates"
                        dataIndex="CBSystemL0Estimates"
                        key="CBSystemL0Estimates"
                        ellipsis={true}
                    />
                    <Column
                        title="GPDM Interlock & BPID"
                        dataIndex="GPDMInterlockBPID"
                        key="GPDMInterlockBPID"
                        ellipsis={true}
                    />
                    <Column
                        title="Demand Governance"
                        dataIndex="DemandGovernance"
                        key="DemandGovernance"
                        ellipsis={true}
                    />
                    <Column
                        title="Platfrom"
                        dataIndex="Platfrom"
                        key="Platfrom"
                        ellipsis={true}
                    />
                    <Column
                        title="API Type"
                        dataIndex="APIType"
                        key="APIType"
                        ellipsis={true}
                    />
                    <Column
                        title="Functional Domain"
                        dataIndex="FunctionalDomain"
                        key="FunctionalDomain"
                        ellipsis={true}
                    />
                    <Column
                        title="Feature"
                        dataIndex="Feature"
                        key="Feature"
                        ellipsis={true}
                    />
                    <Column
                        title="Service"
                        dataIndex="Service"
                        key="Service"
                        ellipsis={true}
                    />
                    <Column
                        title="Channel Agnostic"
                        dataIndex="ChannelAgnostic"
                        key="ChannelAgnostic"
                        ellipsis={true}
                    />
                    <Column
                        title="Demand Classification"
                        dataIndex="DemandClassification"
                        key="DemandClassification"
                        ellipsis={true}
                    />
                    <Column
                        title="Reusability Score"
                        dataIndex="ReusabilityScore"
                        key="ReusabilityScore"
                        ellipsis={true}
                    />
                    <Column
                        title="SAPI Ref Number"
                        dataIndex="SAPIRefNumber"
                        key="SAPIRefNumber"
                        ellipsis={true}
                    />
                    <Column
                        title="Old SAPI Ref Number"
                        dataIndex="OldSAPIRefNumber"
                        key="OldSAPIRefNumber"
                        ellipsis={true}
                    />
                    <Column
                        title="Design Review Approval"
                        dataIndex="DesignReviewApproval"
                        key="DesignReviewApproval"
                        ellipsis={true}
                    />
                    <Column
                        title="Design Approval"
                        dataIndex="DesignApproval"
                        key="DesignApproval"
                        ellipsis={true}
                    />
                    <Column
                        title="Final Approval"
                        dataIndex="FinalApproval"
                        key="FinalApproval"
                        ellipsis={true}
                    />
                    <Column
                        title="Target Date OF Next Milestone"
                        dataIndex="TargetDateOFNextMilestone"
                        key="TargetDateOFNextMilestone"
                        ellipsis={true}
                    />
                    <Column
                        title="Next Miletone RAG Status"
                        dataIndex="NextMiletoneRAGStatus"
                        key="NextMiletoneRAGStatus"
                        ellipsis={true}
                    />
                    <Column
                        title="Target Overall Delivery"
                        dataIndex="TargetOverallDelivery"
                        key="TargetOverallDelivery"
                        ellipsis={true}
                    />
                    <Column
                        title="OverallDeliveryRAG Status"
                        dataIndex="OverallDeliveryRAGStatus"
                        key="OverallDeliveryRAGStatus"
                        ellipsis={true}
                    />
                </DataTable>
            </CardContainer>
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
}
