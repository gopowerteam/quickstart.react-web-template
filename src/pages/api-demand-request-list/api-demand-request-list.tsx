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
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        },
        {
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        },
        {
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        },
        {
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        },
        {
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        },
        {
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        },
        {
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        },
        {
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        },
        {
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        },
        {
            UniqueOrderRef: '',
            EntryCreationDate: '8/2/19',
            OrderRecordDate: '8/2/19',
            DemandName: 'Annette Black',
            SAPIName: 'Sarfin Inc.',
            Country: 'Bahrain',
            BackEndSystem: 'HUB',
            Channel: 'CMB',
            RequestorContact: 'Theresa Webb',
            OSSOverallContact: 'Cameron Williamson',
            CoreBankingSystemContact: 'Wade Warren',
            GBGF: 'RBWM',
            MultiCountry: 'Y',
            APILifecycleStage: 'Production',
            TargetLiveDate: '6/21/19',
            TotalOSSL0Estimates: '13.5',
            OSSAPIL0Estimates: '13.5',
            CBSystemL0Estimates: '13.5',
            GPDMInterlockBPID: '903570',
            DemandGovernance: '8/15/17',
            Platfrom: 'DTP',
            APIType: 'TRUE SAPI',
            FunctionalDomain: 'Customer',
            Feature: 'Customer Maintenacne',
            Service: 'Customer Creation and Service',
            ChannelAgnostic: 'Customer & Staff Channel  Agnostic',
            DemandClassification: 'New',
            ReusabilityScore: '100',
            SAPIRefNumber: 'CBIL-49560',
            OldSAPIRefNumber: 'CBIL-49560',
            DesignReviewApproval: '11/7/16',
            DesignApproval: '11/7/16',
            FinalApproval: '-',
            TargetDateOFNextMilestone: '8/2/19',
            NextMiletoneRAGStatus: '1/28/17',
            TargetOverallDelivery: '5/27/15',
            OverallDeliveryRAGStatus: '10/6/13'
        }
    ]
    public render() {
        const { selectedRowKeys } = this.state
        const { Option } = Select

        return (
            <components.PageContainer title="API Demand Request List">
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
                                <Option value="New">New</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="BackendSystem"
                            label="Back-end System"
                            initialValue="HUB"
                        >
                            <Select>
                                <Option value="HUB">HUB</Option>
                            </Select>
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
                            <DatePicker
                                renderExtraFooter={() => 'extra footer'}
                            />
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
                                <Option value="CMB">CMB</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="DesignReviewApproval"
                            label="Design Review Approval"
                            initialValue="CMB"
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
                        <Form.Item name="SAPIName" label="SAPI Name">
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="GBGF"
                            label="GB/GF"
                            initialValue="RBWM"
                        >
                            <Select>
                                <Option value="RBWM">RBWM</Option>
                            </Select>
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
                                <Option value="Production">Production</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Platfrom"
                            label="Platfrom"
                            initialValue="DTP"
                        >
                            <Select>
                                <Option value="DTP">DTP</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="TargetLiveDate"
                            label="Target Live Date"
                        >
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
                                <Option value="Cameron Williamson">
                                    Cameron Williamson
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Contry"
                            label="Contry"
                            initialValue="Georgia"
                        >
                            <Select>
                                <Option value="Georgia">Georgia</Option>
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
                                <Option value="Cameron Williamson">
                                    Cameron Williamson
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="APIType"
                            label="API Type"
                            initialValue="TRUE SAPI"
                        >
                            <Select>
                                <Option value="TRUE SAPI">TRUE SAPI</Option>
                            </Select>
                        </Form.Item>
                    </DataForm>
                </CardContainer>
                <CardContainer title="API Demand Request List">
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
                        <Column
                            title="Country"
                            dataIndex="Country"
                            key="Country"
                        />
                        <Column
                            title="Back-endSystem"
                            dataIndex="BackEndSystem"
                            key="BackEndSystem"
                        />
                        <Column
                            title="Channel"
                            dataIndex="Channel"
                            key="Channel"
                        />
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
                        <Column
                            title="Feature"
                            dataIndex="Feature"
                            key="Feature"
                        />
                        <Column
                            title="Service"
                            dataIndex="Service"
                            key="Service"
                        />
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
