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

interface ApiDetailFormState {}

interface ApiDetailFormProps {}

export default class ApiDetailForm extends Component<
    RouteComponentProps<ApiDetailFormProps>,
    ApiDetailFormState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        const columns = [
            {
                title: 'Version',
                dataIndex: 'version'
            },
            {
                title: 'Date',
                dataIndex: 'date'
            },
            {
                title: 'Status',
                dataIndex: 'status'
            },
            {
                title: 'Sites in Used',
                dataIndex: 'sitesInUsed'
            },
            {
                title: 'Consumer Name',
                dataIndex: 'consumerName'
            },
            {
                title: 'Consumer EIM ID',
                dataIndex: 'eim'
            },
            {
                title: 'Consumer ID in HUB ',
                dataIndex: 'hubId'
            },
            {
                title: 'Channel Code in HUB (Customer/HUB) ',
                dataIndex: 'inHubCode'
            }
        ]
        const data = [
            {
                key: '1',
                version: 'V1.0.0',
                date: '11-05-2019',
                status: 'Production',
                sitesInUsed: 'Australia',
                consumerName: 'CARD',
                eim: '',
                hubId: 'HUB_DIGITAL_CARD',
                inHubCode: 'Customer'
            }
        ]
        return (
            <components.PageContainer title="API Detail">
                <div
                    style={{ fontSize: 28 }}
                    className="flex-row justify-content-between"
                >
                    <div>Customer Credit Card Creation</div>
                    <div>{/* <Button type="primary">Edit</Button> */}</div>
                </div>
                <Divider />
                <CardContainer title="Basic Information">
                    <DataForm
                        name="demo-form"
                        column={1}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <Form.Item
                            name="API Method"
                            label="API Method"
                            initialValue="Default"
                        >
                            <Select>
                                <Select.Option value="Default">
                                    Default
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="API ID" label="API ID">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Status"
                            label="Status"
                            initialValue="Default"
                        >
                            <Select>
                                <Select.Option value="Default">
                                    Default
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Functional Domain"
                            label="Functional Domain"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="Features" label="Features">
                            <Input />
                        </Form.Item>
                        <Form.Item name="Service" label="Service">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Global/Regional/Local"
                            label="Global/Regional/Local"
                            initialValue="Default"
                        >
                            <Select>
                                <Select.Option value="Default">
                                    Default
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Channels"
                            label="Channel"
                            initialValue="Default"
                        >
                            <Select>
                                <Select.Option value="Default">
                                    Default
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="GB/GF"
                            label="GB/GF"
                            initialValue="Default"
                        >
                            <Select>
                                <Select.Option value="Default">
                                    Default
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="HUB API ID" label="HUB API ID">
                            <Input />
                        </Form.Item>
                        <LabelItem label="Latest Version">V1.0.0</LabelItem>
                        <Form.Item name="Functionality" label="Description">
                            <Input />
                        </Form.Item>
                    </DataForm>
                    <Divider />
                    {/*
                    <Table
                        columns={columns}
                        dataSource={data}
                        size="small"
                        pagination={false}
                    />
                    <Divider />
                </CardContainer>
                <CardContainer title="Version v1.0.0">
                    <div
                        style={{ width: '100%' }}
                        className="flex-row justify-content-end"
                    >
                        <Button type="primary" size="large" danger>
                            Add Version
                        </Button>
                    </div>
                    <DataForm
                        name="demo-form"
                        column={1}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <LabelItem label="API ID">SAPI-001</LabelItem>
                        <LabelItem label="API Name">
                            Customer Address Creation
                        </LabelItem>
                        <Form.Item
                            name="Status"
                            label="Status"
                            initialValue="Default"
                        >
                            <Select>
                                <Select.Option value="Default">
                                    Default
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="HUB API ID" label="HUB API ID">
                            <Input />
                        </Form.Item>
                        <Form.Item name="HUB PGM Flow" label="HUB PGM Flow">
                            <Input />
                        </Form.Item>
                        <Form.Item name="Enhancement" label="Enhancement">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="API Review Link"
                            label="API Review Link"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="HUB API Documents"
                            label="HUB API Documents"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="HUB API Documents" label=" ">
                            <Input />
                        </Form.Item>
                        <Form.Item name="HUB API Documents" label=" ">
                            <Input />
                        </Form.Item>
                        <Form.Item name="HUB API Documents" label=" ">
                            <Input />
                        </Form.Item>
                        <Form.Item name="HUB API Documents" label=" ">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Mul API Documents "
                            label="Mul API Documents"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="Mul API Documents " label=" ">
                            <Input />
                        </Form.Item>
                        <Form.Item name="Mul API Documents " label=" ">
                            <Input />
                        </Form.Item>
                        <Form.Item name="Mul API Documents " label=" ">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Certification Result"
                            label="Certification Result"
                        >
                            <Input />
                        </Form.Item>
                   
                        <Form.Item name="Certification Result" label=" ">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Simple API Call"
                            label="Simple API Call"
                        >
                            <Input />
                        </Form.Item>
                    </DataForm> */}
                    <div
                        style={{ width: '100%' }}
                        className="flex-row justify-content-between"
                    >
                        <Button type="primary" size="large" danger>
                            Submit
                        </Button>
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
