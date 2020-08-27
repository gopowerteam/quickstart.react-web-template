import React from 'react'
import styled from 'styled-components'
import { Button, Table, Pagination, Form, Row, Col } from 'antd'
import { PageService } from '~/core/services/page.service'
import { ColProps } from 'antd/lib/col'
import { FormLabelAlign } from 'antd/lib/form/interface'

const components = {
    Wrapper: styled.section``,
    FormContainer: styled.div`
        label {
            word-break: break-word;
            white-space: pre-wrap;
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

export default class DataForm extends React.Component<ComponentProp> {
    private default = {
        column: 3,
        gutter: 24,
        colon: false
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
        const children = this.props.children
            ? this.props.children instanceof Array
                ? this.props.children
                : [this.props.children]
            : []

        const column = this.props.column || this.default.column

        return children.map((item, index) => (
            <Col span={24 / column} key={index}>
                {item}
            </Col>
        ))
    }
}
