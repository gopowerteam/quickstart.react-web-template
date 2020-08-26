import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    PageContainer: styled(PageContainer)``
}

interface DemandRequestDetailFormOutsideState {}

interface DemandRequestDetailFormOutsideProps {}

export default class DemandRequestDetailFormOutside extends Component<
    RouteComponentProps<DemandRequestDetailFormOutsideProps>,
    DemandRequestDetailFormOutsideState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer>
                DemandRequestDetailFormOutside
            </components.PageContainer>
        )
    }
}
