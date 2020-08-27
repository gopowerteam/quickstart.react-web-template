import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'

const components = {
    PageContainer: styled(PageContainer)``
}

interface DashboardState {}

interface DashboardProps {}

export default class Dashboard extends Component<
    RouteComponentProps<DashboardProps>,
    DashboardState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer title="Dashboard">
                <CardContainer title="dashboard">dashboard</CardContainer>
            </components.PageContainer>
        )
    }
}
