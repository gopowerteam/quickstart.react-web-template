import React, { ReactNode, ComponentClass } from 'react'
import styled from 'styled-components'

const components = {
    Wrapper: styled.section``
}

interface ComponentProp {
    title?: string
    component: ComponentClass<any>
}

export default class StepItem extends React.Component<ComponentProp> {
    public render() {
        return <components.Wrapper>{this.props.children}</components.Wrapper>
    }
}
