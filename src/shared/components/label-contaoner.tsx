import React from 'react'
import styled from 'styled-components'

const components = {
    Wrapper: styled.section``
}

interface ComponentProp {
    title?: string
}

export default class LabelContainer extends React.Component<ComponentProp> {
    public render() {
        return <components.Wrapper></components.Wrapper>
    }
}
