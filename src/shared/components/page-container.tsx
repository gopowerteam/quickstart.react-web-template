import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const components = {
    Wrapper: styled.section`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
    `,
    HeaderContainer: styled.div`
        background-color: ${props =>
            props.theme.pageContainer.header.background};
        color: ${props => props.theme.pageContainer.header.color};
        height: 60px;
        line-height: 60px;
        padding: 0 50px;
        font-size: 26px;
    `,
    ContentContainer: styled.div`
        flex: 1;
        position: relative;
    `,
    Content: styled.div`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 100px;
        left: 0;
        overflow: auto;
        background: red;
    `
}

interface ComponentProp {
    title?: string
}

export default class PageContainer extends React.Component<ComponentProp> {
    public render() {
        return (
            <components.Wrapper>
                {this.renderHeader()}
                {this.renderContent()}
            </components.Wrapper>
        )
    }

    public renderHeader() {
        const { title } = this.props

        return <components.HeaderContainer>{title}</components.HeaderContainer>
    }

    public renderContent() {
        return (
            <components.ContentContainer>
                <components.Content> {this.props.children}</components.Content>
            </components.ContentContainer>
        )
    }
}
