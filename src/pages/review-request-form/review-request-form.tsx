import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, Select, DatePicker } from 'antd'
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
                    <LabelContainer column={2} labelSpan={15}>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                        <LabelItem label="字段标题">测试内容</LabelItem>
                    </LabelContainer>
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
