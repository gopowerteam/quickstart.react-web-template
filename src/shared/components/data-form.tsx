import React from 'react'
import styled from 'styled-components'
import { Button, Table, Pagination, Form, Row, Col } from 'antd'
import { PageService } from '~/core/services/page.service'
import { ColProps } from 'antd/lib/col'
import { FormLabelAlign } from 'antd/lib/form/interface'
import DataFormItem from './data-form-item'

const components = {
    Wrapper: styled.section``,
    FormContainer: styled.div`
        label {
            word-break: break-word;
            white-space: pre-wrap;
            height: 35px;
        }
    `,
    PageinationContainer: styled.div``,
    ActionContainer: styled.div``
}

interface ComponentProp {
    name: string
    column?: number
    gutter?: number
    labelCol?: ColProps
    wrapperCol?: ColProps
    labelAlign?: FormLabelAlign
    colon?: boolean
}

interface ComponentState {
    collapse: boolean
}

export default class DataForm extends React.Component<
    ComponentProp,
    ComponentState
> {
    public static Item = DataFormItem
    private default = {
        column: 3,
        gutter: 24,
        colon: false,
        collapseStyle: {
            display: 'none'
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            collapse: false
        }
    }

    public render() {
        return (
            <components.Wrapper>
                {this.renderFormContainer()}
                {this.renderActionContainer()}
            </components.Wrapper>
        )
    }

    public renderActionContainer() {
        console.log(1, this.hasCollapseItem())
        return <components.ActionContainer></components.ActionContainer>
    }

    public renderFormContainer() {
        const { labelCol, wrapperCol, labelAlign } = this.props
        const gutter = this.props.gutter || this.default.gutter
        const colon = this.props.colon || this.default.colon
        return (
            <components.FormContainer>
                <Form
                    colon={colon}
                    name="advanced_search"
                    className="ant-advanced-search-form"
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    labelAlign={labelAlign}
                >
                    <Row justify="start" gutter={gutter}>
                        {this.getFormItems()}
                    </Row>
                </Form>
            </components.FormContainer>
        )
    }

    private getFormItems() {
        const { collapse } = this.state
        const column = this.props.column || this.default.column

        return React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement(child)) {
                const style =
                    collapse === child.props.collapse
                        ? this.default.collapseStyle
                        : {}
                return (
                    <Col span={24 / column} key={index} style={style}>
                        <Form.Item {...child.props}>
                            {child.props.children}
                        </Form.Item>
                    </Col>
                )
            }
            return child
        })
    }

    private hasCollapseItem() {
        const count = React.Children.map(
            this.props.children,
            (child: any) => child.props.collapse
        ).filter(x => x).length

        return count > 0
    }
}
