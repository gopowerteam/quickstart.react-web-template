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

interface APICatalogueListState {
    selectedRowKeys: any[]
}

interface APICatalogueListProps {}

export default class APICatalogueList extends Component<
    RouteComponentProps<APICatalogueListProps>,
    APICatalogueListState
> {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: []
        }
    }

    private dataSource = [
        {
            APIID: '1',
            APIName: 'Ferrari',
            APIMethod: 'GET',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        },
        {
            APIID: '2',
            APIName: 'Ferrari',
            APIMethod: 'POST',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        },
        {
            APIID: '3',
            APIName: 'Ferrari',
            APIMethod: 'POST',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        },
        {
            APIID: '4',
            APIName: 'Ferrari',
            APIMethod: 'POST',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        },
        {
            APIID: '5',
            APIName: 'Ferrari',
            APIMethod: 'POST',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        },
        {
            APIID: '6',
            APIName: 'Ferrari',
            APIMethod: 'POST',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        },
        {
            APIID: '7',
            APIName: 'Ferrari',
            APIMethod: 'POST',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        },
        {
            APIID: '8',
            APIName: 'Ferrari',
            APIMethod: 'POST',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        },
        {
            APIID: '9',
            APIName: 'Ferrari',
            APIMethod: 'POST',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        },
        {
            APIID: '10',
            APIName: 'Ferrari',
            APIMethod: 'POST',
            APIType: 'TRUE API',
            Status: 'TRUE API',
            FunctionalDomain: 'TRUE API',
            Feature: 'TRUE API',
            Service: 'TRUE API',
            GlobalRegionalLocal: 'Global',
            Channels: 'BRWM',
            GBGF: 'BRWM',
            HUBAPIID: '001234223',
            LatestVersion: '1.0.0',
            Description: 'Customer'
        }
    ]
    public render() {
        const { selectedRowKeys } = this.state
        const { Option } = Select

        return (
            <components.PageContainer title="API Catalogue">
                <CardContainer title="Search">
                    <DataForm
                        name="demo-form"
                        column={2}
                        labelCol={{ span: 6 }}
                        labelAlign="left"
                        actions={this.renderFormAction()}
                    >
                        <DataForm.Item
                            name="APIName"
                            label="API Name"
                            initialValue="Ferrari"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="Channels"
                            label="Channels"
                            initialValue="Customer"
                        >
                            <Select>
                                <Option value="Customer">Customer</Option>
                            </Select>
                        </DataForm.Item>
                        <DataForm.Item
                            name="APIMethod"
                            label="API Method"
                            initialValue="GET"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="GBGF"
                            label="GB/GF"
                            initialValue="Customer"
                        >
                            <Select>
                                <Option value="Customer">Customer</Option>
                            </Select>
                        </DataForm.Item>
                        <DataForm.Item
                            name="APIType"
                            label="APIType"
                            initialValue="Customer"
                        >
                            <Select>
                                <Option value="Customer">Customer</Option>
                            </Select>
                        </DataForm.Item>
                        <DataForm.Item
                            name="HUBAPIID"
                            label="HUB API ID"
                            initialValue="0112345"
                        >
                            <Input />
                        </DataForm.Item>
                        <DataForm.Item
                            name="FunctionalDomain"
                            label="Functional Domain"
                            initialValue="PCI:Tony Wang"
                        >
                            <Select>
                                <Option value="PCI:Tony Wang">
                                    PCI:Tony Wang
                                </Option>
                            </Select>
                        </DataForm.Item>
                        <DataForm.Item
                            name="GlobalRegionalLocal"
                            label="Global/Regional/Local"
                            initialValue="Global"
                        >
                            <Select>
                                <Option value="Global">Global</Option>
                            </Select>
                        </DataForm.Item>
                    </DataForm>
                </CardContainer>
                <CardContainer title="API Catalogue">
                    <DataTable rowKey="TRUESAPIID" dataSource={this.dataSource}>
                        {/* <Column
                            title="API ID"
                            dataIndex="APIID"
                            key="APIID"
                            render={text => (
                                <Button
                                    type="link"
                                    onClick={() => this.openForm()}
                                >
                                    {text}
                                </Button>
                            )}
                        /> */}

                        <Column
                            title="API Name"
                            dataIndex="APIName"
                            key="APIName"
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
                            title="API Method"
                            dataIndex="APIMethod"
                            key="APIMethod"
                        />
                        <Column
                            title="API Type"
                            dataIndex="APIType"
                            key="APIType"
                        />
                        <Column
                            title="Status"
                            dataIndex="Status"
                            key="Status"
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
                            title="Global/Regional/Local"
                            dataIndex="GlobalRegionalLocal"
                            key="GlobalRegionalLocal"
                        />
                        <Column
                            title="Channels"
                            dataIndex="Channels"
                            key="Channels"
                        />
                        <Column title="GB/GF" dataIndex="GBGF" key="GBGF" />
                        <Column
                            title="HUB API ID"
                            dataIndex="HUBAPIID"
                            key="HUBAPIID"
                        />
                        <Column
                            title="Lastest Version"
                            dataIndex="LatestVersion"
                            key="LatestVersion"
                        />
                        <Column
                            title="Description"
                            dataIndex="Description"
                            key="Description"
                        />
                    </DataTable>
                </CardContainer>
            </components.PageContainer>
        )
    }
    private openForm() {
        this.props.history.push('/api/review-request-form')
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
