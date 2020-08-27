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
        display: flex;
        justify-content: center;
        padding: 0 40px;
        position: relative;
    `
}

interface ComponentProp {
    title?: string
}

export default class LabelContainer extends React.Component<ComponentProp> {
    public render() {
        return <components.Wrapper></components.Wrapper>
    }
}
