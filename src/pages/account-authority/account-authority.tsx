import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import DataTable from '~/shared/components/data-table'
import Column from 'antd/lib/table/Column'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import { Form, Input, Select, DatePicker, Button } from 'antd'
import LabelContainer from '~/shared/components/label-contaoner'
const components = {
    PageContainer: styled(PageContainer)``
}

interface AccountAuthorityState {
    selectedRowKeys: any[]
}

interface AccountAuthorityProps {}

export default class AccountAuthority extends Component<
    RouteComponentProps<AccountAuthorityProps>,
    AccountAuthorityState
> {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: []
        }
    }

    private dataSource = [
        {
            StaffID: '45119706',
            StaffName: 'Theresa Webb',
            JobTitle: 'Travel Writer',
            Department: 'Sales & Marketing',
            Email: 'theresa_webb@hsbc.com.cn',
            Role: 'Demand Approver'
        }
    ]
    public render() {
        const { selectedRowKeys } = this.state
        const { Option } = Select

        return (
            <components.PageContainer title="Account Authotiry">
                <CardContainer title="Account List">
                    <div className="flex-row justify-content-end padding-y">
                        <Button type="primary">Authorize</Button>
                    </div>

                    <DataTable
                        rowKey="StaffID"
                        dataSource={this.dataSource}
                        rowSelection={{
                            selectedRowKeys
                        }}
                    >
                        <Column
                            ellipsis={true}
                            title="Staff ID"
                            dataIndex="StaffID"
                            key="StaffID"
                        />
                        <Column
                            ellipsis={true}
                            title="Staff Name"
                            dataIndex="StaffName"
                            key="StaffName"
                        />
                        <Column
                            ellipsis={true}
                            title="Job Title"
                            dataIndex="JobTitle"
                            key="JobTitle"
                        />
                        <Column
                            ellipsis={true}
                            title="Email"
                            dataIndex="Email"
                            key="Email"
                        />
                        <Column
                            ellipsis={true}
                            title="Role"
                            dataIndex="Role"
                            key="Role"
                        />
                    </DataTable>
                </CardContainer>
            </components.PageContainer>
        )
    }
}
