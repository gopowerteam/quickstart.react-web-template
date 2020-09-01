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

interface ApiDetailState {}

interface ApiDetailProps {}

export default class ApiDetail extends Component<
    RouteComponentProps<ApiDetailProps>,
    ApiDetailState
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
                    <div>
                        <Button
                            type="primary"
                            size="large"
                            onClick={() => this.openForm()}
                        >
                            Edit
                        </Button>
                    </div>
                </div>
                <Divider />
                <CardContainer title="Basic Information">
                    <LabelContainer column={2} labelSpan={3}>
                        <LabelItem label="API Method">Post</LabelItem>
                        <LabelItem label="Global/Regional/Local">
                            China
                        </LabelItem>
                        <LabelItem label="API Type">Post</LabelItem>
                        <LabelItem label="Channels">
                            Customer Channels Agnostic
                        </LabelItem>
                        <LabelItem label="Status">Post</LabelItem>
                        <LabelItem label="GB/GF"> </LabelItem>
                        <LabelItem label="Functional Domain">
                            Customer Address Creation
                        </LabelItem>
                        <LabelItem label="HUB API ID">CCCRDCRT</LabelItem>
                        <LabelItem label="Features">
                            Customer Address Creation
                        </LabelItem>
                        <LabelItem label="Latest Version">V1.0.0</LabelItem>
                        <LabelItem label="Service">
                            Customer Address Creation
                        </LabelItem>
                        <LabelItem label="Functionality">
                            Real time to creat
                        </LabelItem>
                    </LabelContainer>
                    <LabelContainer column={1} labelSpan={2}>
                        <LabelItem label="Description"></LabelItem>
                    </LabelContainer>
                    <Divider />
                    <Table
                        columns={columns}
                        dataSource={data}
                        size="small"
                        pagination={false}
                    />
                    <Divider />
                </CardContainer>
                <CardContainer title="Version v1.0.0">
                    <LabelContainer column={1} labelSpan={4}>
                        <LabelItem label="API ID">SAPI-001</LabelItem>
                        <LabelItem label="API Name">
                            Customer Address Creation
                        </LabelItem>
                        <LabelItem label="Status">Development</LabelItem>
                        <LabelItem label="HUB API ID">Tony Stark</LabelItem>
                        <LabelItem label="HUB PGM Flow">CCCRDCRT</LabelItem>
                        <LabelItem label="Enhancement">
                            Courtney Henry
                        </LabelItem>
                        <LabelItem label="API Review Link">
                            https://www.google.com/
                        </LabelItem>
                        <LabelItem label="HUB API Documents">
                            <li>API Contract:</li>
                            <li>Error Scenario:</li>
                            <li>Funtional Design:</li>
                            <li>IWS postman JSON data:</li>
                        </LabelItem>
                        <LabelItem label="Mule API Documents ">
                            <li>CERT PCF URL:</li>
                            <li>GIT Repo:</li>
                            <li>Jenkins URL:</li>
                            <li>RAML:</li>
                            <li>Mule Postman JSON Data:</li>
                        </LabelItem>
                        <LabelItem label="Certification Result">
                            <li>URL:</li>
                            <li>PT Postman JSON Data:</li>
                        </LabelItem>
                        <LabelItem label="Simple API Call">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                        </LabelItem>
                    </LabelContainer>
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
    private openForm() {
        this.props.history.push('/pages/api-catalogue/api-detail-form')
    }
}
