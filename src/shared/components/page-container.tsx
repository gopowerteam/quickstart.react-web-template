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
        bottom: 0;
        left: 0;
        overflow: auto;
    `
}

interface ComponentProp {
    title?: string
    width?: string
}

export default class PageContainer extends React.Component<ComponentProp> {
    private default = {
        width: '100%'
    }

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
        const width = this.props.width || this.default.width
        return (
            <components.ContentContainer className="flex-column flex-nowrap align-items-center">
                <components.Content style={{ width }}>
                    {this.props.children}
                </components.Content>
            </components.ContentContainer>
        )
    }
}
