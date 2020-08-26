import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    PageContainer: styled(PageContainer)``
}

interface Page2State {}

interface Page2Props {}

export default class Page2 extends Component<
    RouteComponentProps<Page2Props>,
    Page2State
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return <components.PageContainer>Page2</components.PageContainer>
    }
}
