import React, { Props } from 'react'
import styled from 'styled-components'

const components = {
    Wrapper: styled.section`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 50px;
        font-size: 14px;
    `,
    LabelContainer: styled.div``,
    ContentContainer: styled.div`
        flex: 1;
    `
}

const styles = (props: any): { [key: string]: React.CSSProperties } => ({
    labelWidth: {
        width: `${props.width}px`,
        minWidth: `${props.width}px`,
        flexBasis: `${props.width}px`
    },
    labelSpan: {
        flexBasis: `${props.width / 0.12}%`
    }
})

interface ComponentProp {
    label?: string
    labelSpan?: number
    labelWidth?: number
    colon?: boolean
}

export default class LabelItem extends React.Component<ComponentProp> {
    public render() {
        return (
            <components.Wrapper>
                {this.renderLabelContainer()}
                {this.renderContentContainer()}
            </components.Wrapper>
        )
    }

    public renderLabelContainer() {
        const { label, labelSpan, labelWidth, colon } = this.props
        const style = labelWidth
            ? styles({ width: labelWidth }).labelWidth
            : styles({ width: labelSpan }).labelSpan
        return (
            <components.LabelContainer
                className="flex-row align-items-center"
                style={style}
            >
                {label}
                {colon && ':'}
            </components.LabelContainer>
        )
    }

    public renderContentContainer() {
        return (
            <components.ContentContainer className="flex-row align-items-center">
                {this.props.children}
            </components.ContentContainer>
        )
    }
}
