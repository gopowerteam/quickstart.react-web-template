import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import LabelItem from './label-item'

const components = {
    Wrapper: styled.section``
}

interface ComponentProp {
    column?: number
    gutter?: number
    labelSpan?: number
    labelWidth?: number
    colon?: boolean
}

export default class LabelContainer extends React.Component<ComponentProp> {
    public static Item = LabelItem
    private default = {
        column: 3,
        gutter: 24,
        labelSpan: 3,
        colon: false
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
        const column = this.props.column || this.default.column
        const labelSpan = this.props.labelSpan || this.default.column
        const labelWidth = this.props.labelWidth || this.default.column
        const colon = this.props.colon || this.default.colon

        return React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement(child)) {
                return (
                    <Col span={24 / column} key={index}>
                        {React.cloneElement(child, {
                            labelSpan,
                            labelWidth,
                            colon,
                            ...child.props
                        })}
                    </Col>
                )
            }
            return child
        })
    }
}
