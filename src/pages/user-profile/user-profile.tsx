import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'
import LabelContainer from '~/shared/components/label-contaoner'
import LabelItem from '~/shared/components/label-item'
const components = {
    PageContainer: styled(PageContainer)``
}

interface UserProfileState {}

interface UserProfileProps {}

export default class UserProfile extends Component<
    RouteComponentProps<UserProfileProps>,
    UserProfileState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer title="User Profile">
                <CardContainer title="Basic Information">
                    <LabelContainer column={1} labelSpan={3}>
                        <LabelItem label="Staff ID">45119706</LabelItem>
                        <LabelItem label="Staff Name">Ash Zeng</LabelItem>
                        <LabelItem label="Job Title">File Clerk</LabelItem>
                        <LabelItem label="Department ">Finance</LabelItem>
                        <LabelItem label="E-mail">
                            ash_zeng@hsbc.com.cn
                        </LabelItem>
                        <LabelItem label="Role">
                            <p>Demand Approver</p>
                            <p>Global Business Review(GBDR)</p>
                        </LabelItem>
                    </LabelContainer>
                </CardContainer>
            </components.PageContainer>
        )
    }
}
