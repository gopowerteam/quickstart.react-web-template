import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

const components = {
    Wrapper: styled.section``
}

interface ComponentProp {
    column?: number
    gutter?: number
    labelSpan?: number
    labelWidth?: number
}

export default class LabelContainer extends React.Component<ComponentProp> {
    private default = {
        column: 3,
        gutter: 24,
        labelSpan: 3
    }

    public render() {
        const gutter = this.props.gutter || this.default.gutter

        return (
            <components.Wrapper>
                <Row justify="start" gutter={gutter}>
                    {this.getFieldItems()}
                </Row>
            </components.Wrapper>
        )
    }

    private getFieldItems() {
        const { labelSpan, labelWidth } = this.props

        const column = this.props.column || this.default.column

        return React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement(child)) {
                return (
                    <Col span={24 / column} key={index}>
                        {React.cloneElement(child, { labelSpan, labelWidth })}
                    </Col>
                )
            }
            return child
        })
    }
}
