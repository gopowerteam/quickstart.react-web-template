import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    PageContainer: styled(PageContainer)``
}

interface Page1State {}

interface Page1Props {}

export default class Page1 extends Component<
    RouteComponentProps<Page1Props>,
    Page1State
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return <components.PageContainer>Page1</components.PageContainer>
    }
}
