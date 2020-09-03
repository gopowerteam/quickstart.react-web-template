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
            RDRReviewStatus: 'Approval',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: 'Approval',
            GBApprover: 'Tom',
            GTApprovalStatus: 'Approval',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        },
        {
            TRUESAPIID: '2',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewStatus: '1',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: '',
            GBApprover: 'Tom',
            GTApprovalStatus: '',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        },
        {
            TRUESAPIID: '3',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewStatus: '1',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: '',
            GBApprover: 'Tom',
            GTApprovalStatus: '',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        },
        {
            TRUESAPIID: '4',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewStatus: '1',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: '',
            GBApprover: 'Tom',
            GTApprovalStatus: '',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        },
        {
            TRUESAPIID: '5',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewStatus: '1',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: '',
            GBApprover: 'Tom',
            GTApprovalStatus: '',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        },
        {
            TRUESAPIID: '6',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewStatus: '1',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: '',
            GBApprover: 'Tom',
            GTApprovalStatus: '',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        },
        {
            TRUESAPIID: '7',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewStatus: '1',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: '',
            GBApprover: 'Tom',
            GTApprovalStatus: '',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        },
        {
            TRUESAPIID: '8',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewStatus: '1',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: '',
            GBApprover: 'Tom',
            GTApprovalStatus: '',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        },
        {
            TRUESAPIID: '9',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewStatus: '1',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: '',
            GBApprover: 'Tom',
            GTApprovalStatus: '',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        },
        {
            TRUESAPIID: '10',
            TRUESAPIName: 'Ferrari',
            RequestContact: 'Ronald Richards',
            ConsumerProject: 'Enterprise',
            DemandClassification: 'New',
            SubmitDate: '8/2/19',
            RDRReviewStatus: '1',
            RDRReviewDate: '8/2/19',
            RegionalReviewer: 'Joy',
            GBDRReviewDate: '8/2/19',
            GBApprovalStatus: '',
            GBApprover: 'Tom',
            GTApprovalStatus: '',
            GTDRReviewDate: '8/2/19',
            GTApprover: 'm'
        }
    ]
    public render() {
        const { selectedRowKeys } = this.state
        const { Option } = Select
        const { RangePicker } = DatePicker
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
                            label="API ID"
                            initialValue="31981901"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="RequestContact"
                            label="Requestor"
                            initialValue="Annette Black"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="TRUESAPIName"
                            label="API Name"
                            initialValue="Customer Address"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="ConsumerProject"
                            label="Project Name"
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
                            <RangePicker />
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
                            <RangePicker />
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
                            <RangePicker />
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
                            <RangePicker />
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
                            ellipsis={true}
                            title="API ID"
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
                            ellipsis={true}
                            title="API Name"
                            dataIndex="TRUESAPIName"
                            key="TRUESAPIName"
                        />
                        <Column
                            ellipsis={true}
                            title="Requestor"
                            dataIndex="RequestContact"
                            key="RequestContact"
                        />
                        <Column
                            ellipsis={true}
                            title="Project Name"
                            dataIndex="ConsumerProject"
                            key="ConsumerProject"
                        />
                        <Column
                            ellipsis={true}
                            title="Demand Classification"
                            dataIndex="DemandClassification"
                            key="DemandClassification"
                        />
                        <Column
                            ellipsis={true}
                            title="Submit Date"
                            dataIndex="SubmitDate"
                            key="SubmitDate"
                        />
                        <Column
                            ellipsis={true}
                            title="Regional Review Approval Status" /*新增字段*/
                            dataIndex="RDRReviewStatus"
                            key="RDRReviewStatus"
                        />
                        <Column
                            ellipsis={true}
                            title="Regional Review Approval Date"
                            dataIndex="RDRReviewDate"
                            key="RDRReviewDate"
                        />
                        <Column
                            ellipsis={true}
                            title="Regional Reviewer" /*新增字段*/
                            dataIndex="RegionalReviewer"
                            key="RegionalReviewer"
                        />
                        <Column
                            ellipsis={true}
                            title="Global Business Approval Status" /*新增字段*/
                            dataIndex="GBApprovalStatus"
                            key="GBApprovalStatus"
                        />
                        <Column
                            ellipsis={true}
                            title="Global Business Approval Date"
                            dataIndex="GBDRReviewDate"
                            key="GBDRReviewDate"
                        />
                        <Column
                            ellipsis={true}
                            title="Global Business Approver" /*新增字段*/
                            dataIndex="GBApprover"
                            key="GBApprover"
                        />
                        <Column
                            ellipsis={true}
                            title="Global Technical Approval Status" /*新增字段*/
                            dataIndex="GTApprovalStatus"
                            key="GTApprovalStatus"
                        />
                        <Column
                            ellipsis={true}
                            title="Global Technical Approval Date"
                            dataIndex="GTDRReviewDate"
                            key="GTDRReviewDate"
                        />
                        <Column
                            ellipsis={true}
                            title="Global Technical Approver" /*新增字段*/
                            dataIndex="GTApprover"
                            key="GTApprover"
                        />

                        {/* 
                        <Column
                            ellipsis={true}
                        title="Unique Order Ref"
                        dataIndex="age"
                        key="age"
                    />
                        <Column
                            ellipsis={true}
                        title="Entry Creation Date"
                        dataIndex="age"
                        key="age"
                    />
                        <Column
                            ellipsis={true}
                        title="Order Record Date"
                        dataIndex="age"
                        key="age"
                    />
                        <Column
                            ellipsis={true}
                        title="Unique Order Ref"
                        dataIndex="age"
                        key="age"
                    />
                        <Column
                            ellipsis={true}
                        title="Unique Order Ref"
                        dataIndex="age"
                        key="age"
                    />
                        <Column
                            ellipsis={true} title="Address" dataIndex="address" key="address" />

                        <Column
                            ellipsis={true}
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
                <Button type="primary" style={{ width: 90 }} danger>
                    Search
                </Button>
            </>
        )
    }
    private renderTableAction() {
        return (
            <LabelContainer column={3} colon>
                <LabelContainer.Item label="RDR Action" labelWidth={120}>
                    <Button type="primary" style={{ width: 100 }}>
                        Approve
                    </Button>
                    <Button style={{ width: 100 }}>Reject</Button>
                </LabelContainer.Item>
                <div></div>
                <div></div>
                <LabelContainer.Item label="GBDR Action" labelWidth={120}>
                    <Button type="primary" style={{ width: 100 }}>
                        Approve
                    </Button>
                    <Button style={{ width: 100 }}>Reject</Button>
                </LabelContainer.Item>
                <LabelContainer.Item label="GTDR Action" labelWidth={120}>
                    <Button type="primary" style={{ width: 100 }}>
                        Approve
                    </Button>
                    <Button style={{ width: 100 }}>Reject</Button>
                </LabelContainer.Item>
            </LabelContainer>
        )
    }
}
