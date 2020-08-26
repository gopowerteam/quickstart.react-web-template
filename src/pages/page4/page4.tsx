import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    PageContainer: styled(PageContainer)``
}

interface Page4ÏState {}

interface Page4ÏProps {}

export default class Page4Ï extends Component<
    RouteComponentProps<Page4ÏProps>,
    Page4ÏState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return <components.PageContainer>Page4Ï</components.PageContainer>
    }
}
