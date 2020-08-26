import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    PageContainer: styled(PageContainer)``
}

interface Page3ÏState {}

interface Page3ÏProps {}

export default class Page3Ï extends Component<
    RouteComponentProps<Page3ÏProps>,
    Page3ÏState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return <components.PageContainer>Page3Ï</components.PageContainer>
    }
}
