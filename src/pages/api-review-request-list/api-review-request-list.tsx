import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    PageContainer: styled(PageContainer)``
}

interface APIReviewRequestListState {}

interface APIReviewRequestListProps {}

export default class APIReviewRequestList extends Component<
    RouteComponentProps<APIReviewRequestListProps>,
    APIReviewRequestListState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer>
                APIReviewRequestList
            </components.PageContainer>
        )
    }
}
