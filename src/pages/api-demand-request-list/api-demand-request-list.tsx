import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    PageContainer: styled(PageContainer)``
}

interface APIDemandRequestListState {}

interface APIDemandRequestListProps {}

export default class APIDemandRequestList extends Component<
    RouteComponentProps<APIDemandRequestListProps>,
    APIDemandRequestListState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer>
                APIDemandRequestList
            </components.PageContainer>
        )
    }
}
