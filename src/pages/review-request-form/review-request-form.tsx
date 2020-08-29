import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, Select, DatePicker, Table } from 'antd'
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

interface ReviewRequestFormState {}

interface ReviewRequestFormProps {}

export default class ReviewRequestForm extends Component<
    RouteComponentProps<ReviewRequestFormProps>,
    ReviewRequestFormState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer title="Review Request Form">
                {this.renderPageHeader()}

                <CardContainer title="Basic Information">
                    <LabelContainer column={2} labelSpan={3}>
                        <LabelItem label="API ID">SAPI-001</LabelItem>
                        <LabelItem label="Functional Domain">Catloge</LabelItem>
                        <LabelItem label="API Name">
                            Customer Address Creation
                        </LabelItem>
                        <LabelItem label="Feature">
                            Customer Address Creation
                        </LabelItem>
                        <LabelItem label="API Method">GET</LabelItem>
                        <LabelItem label="Service">Customer</LabelItem>
                        <LabelItem label="API Version">1.0.0</LabelItem>
                        <LabelItem label="Demand Classfication">New</LabelItem>
                        <LabelItem label="Requestor">Tony Stark</LabelItem>
                        <LabelItem label="Reusability Score">100</LabelItem>
                        <LabelItem label="Project Name">Sparrow</LabelItem>
                        <LabelItem label="Applicable Channels">
                            Customer Service
                        </LabelItem>
                        <LabelItem label="API Detail URL">
                            https://www.hsbc.com.hk/
                        </LabelItem>

                        <LabelItem label="Applicable GB">-</LabelItem>

                        <LabelItem label="Development Lead">Ash Zeng</LabelItem>

                        <LabelItem label="Applicable Countries">
                            China
                        </LabelItem>

                        <LabelItem label="Submit Date">09-09-2020</LabelItem>
                        <LabelItem label="Region">China</LabelItem>
                    </LabelContainer>
                </CardContainer>
                <CardContainer title="Documents">
                    <Table></Table>
                </CardContainer>
            </components.PageContainer>
        )
    }

    public renderPageHeader() {
        return (
            <components.PageHeaderContainer>
                Customer Address Creation
            </components.PageHeaderContainer>
        )
    }
}
