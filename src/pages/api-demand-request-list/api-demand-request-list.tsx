import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import DataTable from '~/shared/components/data-table'
import Column from 'antd/lib/table/Column'
import { Space } from 'antd'
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

    private dataSource = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer']
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser']
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher']
        }
    ]
    // UniqueOrderRef
    // EntryCreationDate
    // OrderRecordDate
    // DemandName
    // SAPIName
    // Country
    // Back-endSystem
    // Channel
    // RequestorContact
    // OSSOverallContact
    // Core Banking System Contact
    // GB/GF
    // Multi-Country
    // API lifecycle Stage
    // Target Live Date
    // Total OSS L0 Estimates
    // OSS API L0 Estimates
    // CBSystemL0 Estimates
    // GPDM Interlock & BPID
    // Demand Governance
    // Platfrom
    // API Type
    // Functional Domain
    // Feature
    // Service
    // Channel Agnostic
    // Demand Classification
    // Reusability Score
    // SAPI Ref Number
    // Old SAPI Ref Number
    // Design Review Approval
    // Design Approval
    // Final Approval
    // Target Date OF Next Milestone
    // Next Miletone RAG Status
    // Target Overall Delivery
    // OverallDeliveryRAG Status
    public render() {
        const { selectedRowKeys } = this.state
        return (
            <components.PageContainer title="API Demand Request List">
                <DataTable
                    dataSource={this.dataSource}
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
                        dataIndex="Back-endSystem"
                        key="Back-endSystem"
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
                        dataIndex="Core Banking System Contact"
                        key="Core Banking System Contact"
                    />
                    <Column title="GB/GF" dataIndex="GB/GF" key="GB/GF" />
                    <Column
                        title="Multi-Country"
                        dataIndex="Multi-Country"
                        key="Multi-Country"
                    />
                    <Column
                        title="API lifecycle Stage"
                        dataIndex="API lifecycle Stage"
                        key="API lifecycle Stage"
                    />
                    <Column
                        title="Target Live Date"
                        dataIndex="Target Live Date"
                        key="Target Live Date"
                    />
                    <Column
                        title="Total OSS L0 Estimates"
                        dataIndex="Total OSS L0 Estimates"
                        key="Total OSS L0 Estimates"
                    />
                    <Column
                        title="OSS API L0 Estimates"
                        dataIndex="OSS API L0 Estimates"
                        key="OSS API L0 Estimates"
                    />
                    <Column
                        title="CBSystemL0 Estimates"
                        dataIndex="CBSystemL0 Estimates"
                        key="CBSystemL0 Estimates"
                    />
                    <Column
                        title="GPDM Interlock & BPID"
                        dataIndex="GPDM Interlock & BPID"
                        key="GPDM Interlock & BPID"
                    />
                    <Column
                        title="Demand Governance"
                        dataIndex="Demand Governance"
                        key="Demand Governance"
                    />
                    <Column
                        title="Platfrom"
                        dataIndex="Platfrom"
                        key="Platfrom"
                    />
                    <Column
                        title="API Type"
                        dataIndex="API Type"
                        key="API Type"
                    />
                    <Column
                        title="Functional Domain"
                        dataIndex="Functional Domain"
                        key="Functional Domain"
                    />
                    <Column title="Feature" dataIndex="Feature" key="Feature" />
                    <Column title="Service" dataIndex="Service" key="Service" />
                    <Column
                        title="Channel Agnostic"
                        dataIndex="Channel Agnostic"
                        key="Channel Agnostic"
                    />
                    <Column
                        title="Demand Classification"
                        dataIndex="Demand Classification"
                        key="Demand Classification"
                    />
                    <Column
                        title="Reusability Score"
                        dataIndex="Reusability Score"
                        key="Reusability Score"
                    />
                    <Column
                        title="SAPI Ref Number"
                        dataIndex="SAPI Ref Number"
                        key="SAPI Ref Number"
                    />
                    <Column
                        title="Old SAPI Ref Number"
                        dataIndex="Old SAPI Ref Number"
                        key="Old SAPI Ref Number"
                    />
                    <Column
                        title="Design Review Approval"
                        dataIndex="Design Review Approval"
                        key="Design Review Approval"
                    />
                    <Column
                        title="Design Approval"
                        dataIndex="Design Approval"
                        key="Design Approval"
                    />
                    <Column
                        title="Final Approval"
                        dataIndex="Final Approval"
                        key="Final Approval"
                    />
                    <Column
                        title="Target Date OF Next Milestone"
                        dataIndex="Target Date OF Next Milestone"
                        key="Target Date OF Next Milestone"
                    />
                    <Column
                        title="Next Miletone RAG Status"
                        dataIndex="Next Miletone RAG Status"
                        key="Next Miletone RAG Status"
                    />
                    <Column
                        title="Target Overall Delivery"
                        dataIndex="Target Overall Delivery"
                        key="Target Overall Delivery"
                    />
                    <Column
                        title="OverallDeliveryRAG Status"
                        dataIndex="OverallDeliveryRAG Status"
                        key="OverallDeliveryRAG Status"
                    />
                    {/* 
                    <Column
                        title="Unique Order Ref"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="Entry Creation Date"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="Order Record Date"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="Unique Order Ref"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="Unique Order Ref"
                        dataIndex="age"
                        key="age"
                    />
                    <Column title="Address" dataIndex="address" key="address" />

                    <Column
                        title="Action"
                        key="action"
                        render={(text, record: any) => (
                            <Space size="middle">
                                <a>Invite {record.lastName}</a>
                                <a>Delete</a>
                            </Space>
                        )}
                    /> */}
                </DataTable>
            </components.PageContainer>
        )
    }
}
