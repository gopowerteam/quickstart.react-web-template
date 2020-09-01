import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import DataTable from '~/shared/components/data-table'
import Column from 'antd/lib/table/Column'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, Select, DatePicker, Button } from 'antd'
import LabelContainer from '~/shared/components/label-contaoner'
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
                        actions={this.renderFormAction()}
                    >
                        <DataForm.Item
                            name="TRUESAPIID"
                            label="TRUE SAPI ID"
                            initialValue="31981901"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="RequestContact"
                            label="Request Contact"
                            initialValue="Annette Black"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="TRUESAPIName"
                            label="TRUE SAPI Name"
                            initialValue="Customer Address"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="ConsumerProject"
                            label="Consumer Project"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="DemandClassification"
                            label="Demand Classification"
                            initialValue="Approve"
                        >
                            <Select>
                                <Option value="Approve">Approve</Option>
                            </Select>
                        </DataForm.Item>
                        <DataForm.Item
                            name="SubmitDate"
                            label="Submit Date"
                            collapse
                        >
                            <DatePicker />
                        </DataForm.Item>
                        <DataForm.Item
                            name="DemandApproveStatus"
                            label="Demand Approve Status"
                            initialValue="Approve"
                            collapse
                        >
                            <Select>
                                <Option value="Approve">Approve</Option>
                            </Select>
                        </DataForm.Item>
                        <DataForm.Item
                            name="DemandApproveDate"
                            label="Demand Approve Date"
                            collapse
                        >
                            <DatePicker />
                        </DataForm.Item>
                        <DataForm.Item
                            name="DesignReviewApproval"
                            label="Design Review Approval"
                            initialValue="Approve"
                            collapse
                        >
                            <Select>
                                <Option value="Approve">Approve</Option>
                            </Select>
                        </DataForm.Item>
                        <DataForm.Item
                            name="DesignReviewApprovalDate"
                            label="Design Review Approval Date"
                            collapse
                        >
                            <DatePicker />
                        </DataForm.Item>
                        <DataForm.Item
                            name="DesignApproval"
                            label="Design Approval"
                            initialValue="Approve"
                            collapse
                        >
                            <Select>
                                <Option value="Approve">Approve</Option>
                            </Select>
                        </DataForm.Item>
                        <DataForm.Item
                            name="DesignApproveDate"
                            label="Design Approve Date"
                            collapse
                        >
                            <DatePicker />
                        </DataForm.Item>
                    </DataForm>
                </CardContainer>
                <CardContainer title="API Review Request List">
                    <DataTable
                        rowKey="TRUESAPIID"
                        dataSource={this.dataSource}
                        rowSelection={{
                            selectedRowKeys
                        }}
                        actions={this.renderTableAction()}
                    >
                        <Column
                            title="TRUE SAPI ID"
                            dataIndex="TRUESAPIID"
                            key="TRUESAPIID"
                            render={text => (
                                <Button
                                    type="link"
                                    onClick={() => this.openForm()}
                                >
                                    {text}
                                </Button>
                            )}
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
    private openForm() {
        this.props.history.push('/pages/review-request-form')
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
    private renderTableAction() {
        return (
            <LabelContainer column={3} colon>
                <LabelContainer.Item label="RDR Action" labelWidth={120}>
                    <Button type="primary" danger>
                        Approve
                    </Button>
                    <Button>Reject</Button>
                </LabelContainer.Item>
                <div></div>
                <div></div>
                <LabelContainer.Item label="GBDR Action" labelWidth={120}>
                    <Button type="primary" danger>
                        Approve
                    </Button>
                    <Button>Reject</Button>
                </LabelContainer.Item>
                <LabelContainer.Item label="GTDR Action" labelWidth={120}>
                    <Button type="primary" danger>
                        Approve
                    </Button>
                    <Button>Reject</Button>
                </LabelContainer.Item>
            </LabelContainer>
        )
    }
}
