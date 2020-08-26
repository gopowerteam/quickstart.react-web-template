import React from 'react'
import styled from 'styled-components'
import { Button, Table, Pagination } from 'antd'
import { PageService } from '~/core/services/page.service'

const components = {
    Wrapper: styled.section``,
    TabContainer: styled.div``,
    PageinationContainer: styled.div``,
    ActionContainer: styled.div``
}

interface ComponentProp {
    dataSource: any[]
    pageService?: PageService
}

export default class DataTabke extends React.Component<ComponentProp> {
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
        return (
            <components.TabContainer>
                <Table
                    dataSource={this.props.dataSource}
                    pagination={{
                        position: []
                    }}
                >
                    {this.props.children}
                </Table>
            </components.TabContainer>
        )
    }

    public renderPaginationContainer() {
        return (
            <components.PageinationContainer>
                <Pagination
                    showSizeChanger
                    onShowSizeChange={size => this.onShowSizeChange(size)}
                    defaultCurrent={1}
                    total={this.props.dataSource.length}
                />
            </components.PageinationContainer>
        )
    }

    private onShowSizeChange(size) {}
}
