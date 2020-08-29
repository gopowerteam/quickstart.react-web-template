import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { PageStore } from '~/store/page.store'
import { useStore } from 'reto'

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
        overflow: auto;
    `,
    Content: styled.div``,
    ContentWrapper: styled.div`
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

function UpdateStoreTitle(props) {
    const { updateTitle } = useStore(PageStore)

    useEffect(() => {
        props.title && updateTitle(props.title)
    }, [])

    return props.children
}

export default class PageContainer extends React.Component<ComponentProp> {
    private default = {
        width: '100%'
    }

    public componentDidMount() {}

    public render() {
        return (
            <components.Wrapper>
                <UpdateStoreTitle {...this.props}>
                    {this.renderHeader()}
                    {this.renderContent()}
                </UpdateStoreTitle>
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
            <components.ContentContainer>
                <components.ContentWrapper className="flex-column flex-nowrap align-items-center">
                    <components.Content style={{ width }}>
                        {this.props.children}
                    </components.Content>
                </components.ContentWrapper>
            </components.ContentContainer>
        )
    }
}
