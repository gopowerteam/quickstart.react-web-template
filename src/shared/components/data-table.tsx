import React from 'react'
import styled from 'styled-components'
import { Button, Table, Pagination } from 'antd'
import { PageService } from '~/core/services/page.service'
import { TableRowSelection } from 'antd/lib/table/interface'

const components = {
    Wrapper: styled.section``,
    TabContainer: styled.div``,
    PageinationContainer: styled.div``,
    ActionContainer: styled.div``
}

interface ComponentProp {
    dataSource: any[]
    pageService?: PageService
    rowSelection?: TableRowSelection<Record<string, any>>
    height?: string
}

export default class DataTabke extends React.Component<ComponentProp> {
    private defaultHeight = '10000px'
    public render() {
        return (
            <components.Wrapper>
                {this.renderActionContainer()}
                {this.renderTableContainer()}
                {this.renderPaginationContainer()}
            </components.Wrapper>
        )
    }

    public renderActionContainer() {
        return <components.ActionContainer></components.ActionContainer>
    }

    public renderTableContainer() {
        const { dataSource, rowSelection, height } = this.props

        return (
            <components.TabContainer>
                <Table
                    scroll={{
                        x: true
                    }}
                    rowSelection={rowSelection}
                    dataSource={dataSource}
                    pagination={false}
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
