import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, Select, DatePicker, Table, Divider } from 'antd'
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

interface DemandRequestFormDetailState {}

interface DemandRequestFormDetailProps {}

export default class DemandRequestFormDetail extends Component<
    RouteComponentProps<DemandRequestFormDetailProps>,
    DemandRequestFormDetailState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer title="Demand Request Detail">
                {this.renderPageHeader()}

                <CardContainer title="Demand Governance">
                    <LabelContainer column={2} labelSpan={3}>
                        <LabelItem label="Unique Order Ref">SAPI-001</LabelItem>
                        <LabelItem label="Entry Creation Date">
                            05/11/2020
                        </LabelItem>
                    </LabelContainer>
                    <DataForm
                        name="demo-form"
                        column={1}
                        labelCol={{ span: 8 }}
                        labelAlign="left"
                    >
                        <Form.Item name="DemandName" label="Demand Name">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="OrderRecordDate"
                            label="Order Record Date"
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item name="APIName" label="API Name">
                            <Input />
                        </Form.Item>
                        <Form.Item name="APIName" label="API Name">
                            <Input />
                        </Form.Item>
                    </DataForm>
                </CardContainer>
                <Divider />
                <CardContainer title="Documents"></CardContainer>
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
