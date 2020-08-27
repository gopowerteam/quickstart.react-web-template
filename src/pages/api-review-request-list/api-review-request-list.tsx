import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import DataTable from '~/shared/components/data-table'
import Column from 'antd/lib/table/Column'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, Select, DatePicker } from 'antd'
const components = {
    PageContainer: styled(PageContainer)``
}

interface APIReviewRequestListState {
    selectedRowKeys: any[]
}

interface APIReviewRequestListProps {}

export default class APIReviewRequestList extends Component<
    RouteComponentProps<APIReviewRequestListProps>,
    APIReviewRequestListState
> {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: []
        }
    }

    private dataSource = [
        {
            TRUESAPIID: '1',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        },
        {
            TRUESAPIID: '2',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        },
        {
            TRUESAPIID: '3',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        },
        {
            TRUESAPIID: '4',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        },
        {
            TRUESAPIID: '5',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        },
        {
            TRUESAPIID: '6',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        },
        {
            TRUESAPIID: '7',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        },
        {
            TRUESAPIID: '8',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        },
        {
            TRUESAPIID: '9',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        },
        {
            TRUESAPIID: '10',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewDate: '8/2/19',
            GBDRReviewDate: '8/2/19',
            GTDRReviewDate: '8/2/19'
        }
    ]
    public render() {
        const { selectedRowKeys } = this.state
        const { Option } = Select

        return (
            <components.PageContainer title="API Review Request List">
                <CardContainer title="Search">
                    <DataForm
                        name="demo-form"
                        column={2}
                        labelCol={{ span: 6 }}
                        labelAlign="left"
                    >
                        <Form.Item
                            name="TRUESAPIID"
                            label="TRUE SAPI ID"
                            initialValue="31981901"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="RequestContact"
                            label="Request Contact"
                            initialValue="Annette Black"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="TRUESAPIName"
                            label="TRUE SAPI Name"
                            initialValue="Customer Address"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="ConsumerProject"
                            label="Consumer Project"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="DemandClassification"
                            label="Demand Classification"
                            initialValue="Approve"
                        >
                            <Select>
                                <Option value="Approve">Approve</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="SubmitDate" label="Submit Date">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="DemandApproveStatus"
                            label="Demand Approve Status"
                            initialValue="Approve"
                        >
                            <Select>
                                <Option value="Approve">Approve</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="DemandApproveDate"
                            label="Demand Approve Date"
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="DesignReviewApproval"
                            label="Design Review Approval"
                            initialValue="Approve"
                        >
                            <Select>
                                <Option value="Approve">Approve</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="DesignReviewApprovalDate"
                            label="Design Review Approval Date"
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="DesignApproval"
                            label="Design Approval"
                            initialValue="Approve"
                        >
                            <Select>
                                <Option value="Approve">Approve</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="DesignApproveDate"
                            label="Design Approve Date"
                        >
                            <DatePicker />
                        </Form.Item>
                    </DataForm>
                </CardContainer>
                <CardContainer title="API Review Request List">
                    <DataTable
                        rowKey="TRUESAPIID"
                        dataSource={this.dataSource}
                        rowSelection={{
                            selectedRowKeys
                        }}
                    >
                        <Column
                            title="TRUE SAPI ID"
                            dataIndex="TRUESAPIID"
                            key="TRUESAPIID"
                        />
                        <Column
                            title="TRUE SAPI Name"
                            dataIndex="TRUESAPIName"
                            key="TRUESAPIName"
                        />
                        <Column
                            title="Request Contact"
                            dataIndex="RequestContact"
                            key="RequestContact"
                        />
                        <Column
                            title="Consumer Project"
                            dataIndex="ConsumerProject"
                            key="ConsumerProject"
                        />
                        <Column
                            title="Demand Classification"
                            dataIndex="DemandClassification"
                            key="DemandClassification"
                        />
                        <Column
                            title="Submit Date"
                            dataIndex="SubmitDate"
                            key="SubmitDate"
                        />
                        <Column
                            title="RDR Review Date"
                            dataIndex="RDRReviewDate"
                            key="RDRReviewDate"
                        />
                        <Column
                            title="GBDR Review Date"
                            dataIndex="GBDRReviewDate"
                            key="GBDRReviewDate"
                        />
                        <Column
                            title="GTDR Review Date"
                            dataIndex="GTDRReviewDate"
                            key="GTDRReviewDate"
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
                </CardContainer>
            </components.PageContainer>
        )
    }
}
