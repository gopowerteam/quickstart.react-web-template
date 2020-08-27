import React from 'react'
import styled from 'styled-components'

const components = {
    Wrapper: styled.section``
}

interface ComponentProp {
    color?: string
}

export default class Split extends React.Component<ComponentProp> {
    private defaultColor = '#D7D8D6'

    public render() {
        const color = this.props.color || this.defaultColor
        return <components.Wrapper></components.Wrapper>
    }
}
