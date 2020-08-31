import React from 'react'
import styled from 'styled-components'
import { Button, Table, Pagination } from 'antd'
import { PageService } from '~/core/services/page.service'
import { TableRowSelection } from 'antd/lib/table/interface'

const components = {
    Wrapper: styled.section``,
    TabContainer: styled.div``,
    PageinationContainer: styled.div`
        padding: 10px 0;
    `,
    ActionContainer: styled.div`
        padding: 10px 0;
        .ant-btn {
            margin-right: 15px;
        }
    `
}

interface ComponentProp {
    rowKey: string
    dataSource: any[]
    pageService?: PageService
    rowSelection?: TableRowSelection<Record<string, any>>
    height?: string
    actions?: React.ReactNode
    actionPosition?: 'top' | 'bottom'
}

export default class DataTabke extends React.Component<ComponentProp> {
    private default = {
        height: 100,
        actionPosition: 'bottom'
    }
    public render() {
        const actionPosition =
            this.props.actionPosition || this.default.actionPosition
        return (
            <components.Wrapper>
                {actionPosition === 'top' && this.renderActionContainer()}
                {this.renderTableContainer()}
                {this.renderPaginationContainer()}
                {actionPosition === 'bottom' && this.renderActionContainer()}
            </components.Wrapper>
        )
    }

    public renderActionContainer() {
        return (
            <components.ActionContainer>
                {this.props.actions}
            </components.ActionContainer>
        )
    }

    public renderTableContainer() {
        const { dataSource, rowSelection, height, rowKey } = this.props

        return (
            <components.TabContainer>
                <Table
                    rowKey={rowKey}
                    scroll={{
                        x: true
                    }}
                    rowSelection={rowSelection}
                    dataSource={dataSource}
                    pagination={false}
                    size="small"
                    bordered
                >
                    {this.props.children}
                </Table>
            </components.TabContainer>
        )
    }

    public renderPaginationContainer() {
        const { dataSource } = this.props
        return (
            <components.PageinationContainer>
                <Pagination
                    showSizeChanger
                    onShowSizeChange={size => this.onShowSizeChange(size)}
                    defaultCurrent={1}
                    total={dataSource.length}
                />
            </components.PageinationContainer>
        )
    }

    private onShowSizeChange(size) {}
}
