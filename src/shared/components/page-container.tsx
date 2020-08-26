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
    `
}

interface ComponentProp {}

export default class PageContainer extends React.Component<ComponentProp> {
    public render() {
        return <components.Wrapper>{this.props.children}</components.Wrapper>
    }
}
