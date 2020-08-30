import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'
import CardContainer from '~/shared/components/card-container'
import DataForm from '~/shared/components/data-form'
import {
    Form,
    Input,
    Select,
    DatePicker,
    Table,
    Divider,
    Button,
    Upload,
    Row,
    Col,
    Avatar,
    Tooltip,
    List,
    Comment
} from 'antd'
import LabelContainer from '~/shared/components/label-contaoner'
import LabelItem from '~/shared/components/label-item'
import { ArrowDownOutlined, UploadOutlined } from '@ant-design/icons'
import moment from 'moment'
const components = {
    PageContainer: styled(PageContainer)``,
    PageHeaderContainer: styled(PageContainer)`
        height: 60px;
        line-height: 60px;
        padding: 0 50px;
        font-size: 26px;
    `
}

interface ReviewRequestFormState {}

interface ReviewRequestFormProps {}

export default class ReviewRequestForm extends Component<
    RouteComponentProps<ReviewRequestFormProps>,
    ReviewRequestFormState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        const columns = [
            {
                title: 'Documents',
                dataIndex: 'documents'
            },
            {
                title: 'Modify',
                dataIndex: 'modify'
            }
        ]
        const data = [
            {
                key: '1',
                documents: 'ADDRCRT-customer_address_creation_v2.1.0.xlsx',
                modify: '07-07-2020 by Colin Ling'
            }
        ]
        return (
            <components.PageContainer title="Review Request Form">
                {/* {this.renderPageHeader()} */}

                <CardContainer title="Basic Information">
                    <LabelContainer column={2} labelSpan={3}>
                        <LabelItem label="API ID">SAPI-001</LabelItem>
                        <LabelItem label="Functional Domain">Catloge</LabelItem>
                        <LabelItem label="API Name">
                            Customer Address Creation
                        </LabelItem>
                        <LabelItem label="Feature">
                            Customer Address Creation
                        </LabelItem>
                        <LabelItem label="API Method">GET</LabelItem>
                        <LabelItem label="Service">Customer</LabelItem>
                        <LabelItem label="API Version">1.0.0</LabelItem>
                        <LabelItem label="Demand Classfication">New</LabelItem>
                        <LabelItem label="Requestor">Tony Stark</LabelItem>
                        <LabelItem label="Reusability Score">100</LabelItem>
                        <LabelItem label="Project Name">Sparrow</LabelItem>
                        <LabelItem label="Applicable Channels">
                            Customer Service
                        </LabelItem>
                        <LabelItem label="API Detail URL">
                            https://www.hsbc.com.hk/
                        </LabelItem>

                        <LabelItem label="Applicable GB">-</LabelItem>

                        <LabelItem label="Development Lead">Ash Zeng</LabelItem>

                        <LabelItem label="Applicable Countries">
                            China
                        </LabelItem>

                        <LabelItem label="Submit Date">09-09-2020</LabelItem>
                        <LabelItem label="Region">China</LabelItem>
                    </LabelContainer>
                </CardContainer>
                <Divider />
                <CardContainer title="Documents">
                    <Table columns={columns} dataSource={data} size="small" />
                    <div
                        style={{
                            background: '#FFFFFF',
                            border: ' 4px dashed #E4E8EA',
                            boxSizing: 'border-box',
                            padding: 20
                        }}
                    >
                        <div
                            className=" flex-row justify-content-center"
                            style={{ padding: 10 }}
                        >
                            <div>
                                <ArrowDownOutlined />
                                Pull or Browse
                            </div>
                        </div>
                        <div
                            className=" flex-row justify-content-center"
                            style={{ padding: 10 }}
                        >
                            <Upload>
                                <Button
                                    style={{ width: 120, textAlign: 'center' }}
                                >
                                    <UploadOutlined /> Browse
                                </Button>
                            </Upload>
                        </div>
                        <div
                            className="flex-row justify-content-center"
                            style={{ padding: 10 }}
                        >
                            <Input
                                style={{ width: 120, textAlign: 'center' }}
                                defaultValue="Comment..."
                            />
                        </div>
                        <div
                            className="flex-row justify-content-center"
                            style={{ padding: 10 }}
                        >
                            <Button>Upload</Button>
                        </div>
                    </div>
                </CardContainer>
                <CardContainer title="Approval Status">
                    <div
                        style={{
                            background: '#E5F2F2',
                            border: '1px solid #00847F',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div
                            style={{
                                fontSize: '18px',
                                paddingLeft: '30px',
                                paddingTop: '20px',
                                fontWeight: 500
                            }}
                            className=" flex-row justify-content-between"
                        >
                            <div> Regional Review Group(RDR)</div>
                            <div style={{ color: '#00847F', paddingRight: 20 }}>
                                <img
                                    src={require('~/assets/images/approved.png')}
                                ></img>
                                Approved
                            </div>
                        </div>
                        <div
                            style={{
                                fontSize: '14px',
                                paddingLeft: '30px',
                                paddingTop: '20px'
                            }}
                        >
                            <LabelContainer column={1} labelSpan={3}>
                                <LabelItem label="Reviewer:">
                                    Tony Stark
                                </LabelItem>
                                <LabelItem label="Date in Operation:">
                                    05/11/2020
                                </LabelItem>
                            </LabelContainer>
                        </div>
                        <div className="flex-row justify-content-end">
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    className="submit-button"
                                    disabled
                                    size="large"
                                >
                                    Approve
                                </Button>
                            </div>
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    className="submit-button"
                                    size="large"
                                    disabled
                                >
                                    Reject
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 20 }}></div>
                    <div
                        style={{
                            background: '#F9F2F3',
                            border: '1px solid #A8000B',
                            paddingTop: '20px'
                        }}
                    >
                        <div
                            style={{
                                fontSize: '18px',
                                paddingLeft: '30px',
                                paddingTop: '20px',
                                fontWeight: 500
                            }}
                            className=" flex-row justify-content-between"
                        >
                            <div> Global Business Review(GBDR)</div>
                            <div style={{ color: '#A8000B', paddingRight: 20 }}>
                                <img
                                    src={require('~/assets/images/rej.png')}
                                ></img>
                                Rejected
                            </div>
                        </div>
                        <div
                            style={{
                                fontSize: '14px',
                                paddingLeft: '30px',
                                paddingTop: '20px',
                                paddingRight: '150px'
                            }}
                        >
                            <LabelContainer column={1} labelSpan={3}>
                                <LabelItem label="Reviewer:">VivI Li</LabelItem>
                                <LabelItem label="Date in Operation:">
                                    08-10-2020
                                </LabelItem>
                                <LabelItem label="Comment:">
                                    Ask CDCR San Quintin State Prison 2008. We
                                    installed Purex dispensers throughout the
                                    prison to combat diseases…and it was a
                                    Roaring Success (as in Roaring Drunk) I mean
                                    we had Long lines of prisoners fist fighting
                                    to use them.
                                </LabelItem>
                            </LabelContainer>
                        </div>
                        <div className="flex-row justify-content-end">
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    className="submit-button"
                                    disabled
                                    size="large"
                                >
                                    Approve
                                </Button>
                            </div>
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    className="submit-button"
                                    size="large"
                                    disabled
                                >
                                    Reject
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 20 }}></div>
                    <div
                        style={{
                            background: '#EBEFF4',
                            border: '1px solid #3E505D',
                            paddingTop: '20px'
                        }}
                    >
                        <div
                            style={{
                                fontSize: '18px',
                                paddingLeft: '30px',
                                paddingTop: '20px',
                                fontWeight: 500
                            }}
                            className=" flex-row justify-content-between"
                        >
                            <div> Global Business Review(GBDR)</div>
                            <div style={{ color: '#305A85', paddingRight: 20 }}>
                                <img
                                    src={require('~/assets/images/inProgress.png')}
                                ></img>
                                In Progress
                            </div>
                        </div>
                        <div
                            style={{
                                fontSize: '14px',
                                paddingLeft: '30px',
                                paddingTop: '20px',
                                paddingRight: '150px'
                            }}
                        >
                            <LabelContainer column={1} labelSpan={3}>
                                <LabelItem label="Reviewer:">
                                    Martin Flower
                                </LabelItem>
                                <LabelItem label="Date in Operation:">
                                    08-10-2020
                                </LabelItem>
                                <LabelItem label="Comment:">
                                    Ask CDCR San Quintin State Prison 2008. We
                                    installed Purex dispensers throughout the
                                    prison to combat diseases…and it was a
                                    Roaring Success (as in Roaring Drunk) I mean
                                    we had Long lines of prisoners fist fighting
                                    to use them.
                                </LabelItem>
                            </LabelContainer>
                        </div>
                        <div className="flex-row justify-content-end">
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    className="submit-button"
                                    disabled
                                    size="large"
                                >
                                    Approve
                                </Button>
                            </div>
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    className="submit-button"
                                    size="large"
                                    disabled
                                >
                                    Reject
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 20 }}></div>

                    <div
                        style={{
                            background: '#fff',
                            border: '1px solid #00847F',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div
                            className="flex-row justify-content-between"
                            style={{
                                fontSize: '18px',
                                paddingLeft: '30px',
                                paddingTop: '20px',
                                fontWeight: 500
                            }}
                        >
                            <div>Design Approval</div>

                            <div
                                style={{
                                    color: '#333333',
                                    paddingRight: 20,
                                    fontSize: '18px'
                                }}
                            >
                                <img
                                    src={require('~/assets/images/plus.png')}
                                ></img>
                                Verify
                            </div>
                        </div>
                        <div style={{ height: 20 }}></div>

                        <div className="flex-row justify-content-end">
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="submit-button"
                                    danger
                                    size="large"
                                >
                                    Approve
                                </Button>
                            </div>
                            <div
                                style={{
                                    padding: 20
                                }}
                            >
                                <Button className="submit-button" size="large">
                                    Reject
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Divider dashed />
                    <CardContainer title="Comments">
                        <div className="flex-row">
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <div style={{ paddingLeft: 30 }}>
                                <Input
                                    style={{
                                        width: 1000,
                                        textAlign: 'left'
                                    }}
                                    defaultValue="Post your Comment here..."
                                />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div style={{ paddingLeft: 1100 }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="submit-button"
                                    danger
                                    size="large"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                        {this.renderComment()}
                    </CardContainer>
                </CardContainer>
            </components.PageContainer>
        )
    }
    private renderComment() {
        const data = [
            {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: 'Han Solo',
                avatar:
                    'https://images.generated.photos/NiGIdjpYQkEQoxeDrlPwgEAxdBWHb7NGGrk9TcNmayw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5Njc1OTUuanBn.jpg',
                content: (
                    <p>
                        Crystal Wade As she left the court, she was confronted
                        by angry crowds who tried to block her way.
                    </p>
                ),
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(1, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>{moment().subtract(1, 'days').fromNow()}</span>
                    </Tooltip>
                )
            },
            {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: 'Tony Stark',
                avatar:
                    'https://images.generated.photos/JLF_pD8rRzqP5wKbShiRgca7Vx0OOdanbH5ehmE1W2A/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0MTUxMjYuanBn.jpg',
                content: (
                    <p>
                        Alcohol based exposures through inadvertently consuming
                        hand sanitizer, have been observed to produce more
                        negative side effects for children than non-alcohol
                        based.
                    </p>
                ),
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(2, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>{moment().subtract(2, 'days').fromNow()}</span>
                    </Tooltip>
                )
            }
        ]
        return (
            <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <li>
                        <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        />
                    </li>
                )}
            />
        )
    }
    public renderPageHeader() {
        return (
            <components.PageHeaderContainer>
                Customer Address Creation
            </components.PageHeaderContainer>
        )
    }
}
