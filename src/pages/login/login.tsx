import React, { Component, Props } from 'react'
import styled from 'styled-components'
import { Form, Input, Button, Space } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import { Row, Col } from 'antd'
import { Consumer } from 'reto'
import { UserStore } from '~/store/user.store'

const styles = (
    props?: Props<any>
): { [key: string]: React.CSSProperties } => ({
    autoFlex: {
        flex: 1,
        position: 'relative'
    },
    logo: {
        width: '177px',
        height: '38px'
    }
})
const components = {
    Wrapper: styled.section`
        background-image: url('/images/login-bg.png');
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #e5e5e5;
        background-size: 100% auto;
        background-repeat: no-reapt;
        display: flex;
        flex-direction: column;
    `,
    HeaderContainer: styled.section`
        display: flex;
        align-items: center;
        height: 60px;
        width: 100%;
        flex-basis: 60px;
        color: rgba(255, 255, 255, 0.87);
        background-color: rgba(255, 255, 255, 0.87);
        background-size: 100% auto;
    `,
    FooterContainer: styled.section`
        height: 64px;
        flex-basis: 64px;
        background-color: rgba(64, 64, 64, 0.86);
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        text-align: center;
    `,
    FormContainer: styled.section`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    FormWrapper: styled.section`
        color: #000;
        width: 500px;
        height: 320px;
        background-color: #fff;
        .form-header {
            border-bottom: solid 3px rgba(0, 0, 0, 0.3);
            font-size: 20px;
            padding: 15px 10px;
            font-weight: bold;
        }
        .form-content {
            padding: 40px;
        }
        .form-input {
            /* width: 280px;
            height: 40px;
            margin: 10px; */
        }
        .submit-button {
            background: red;
            border: none;
            width: 120px;
            height: 50px;
            font-size: 16px;
            margin-top: 10px;
        }
    `
}

interface LoginState {}

interface LoginProps {}

export default class Login extends Component<
    RouteComponentProps<LoginProps>,
    RouteComponentProps<LoginState>
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.Wrapper>
                {this.renderHeader()}
                {this.renderForm()}
                {this.renderFooter()}
            </components.Wrapper>
        )
    }

    public renderHeader() {
        return (
            <components.HeaderContainer>
                <img
                    alt=""
                    src={require('~/assets/images/hsbc-logo.png')}
                ></img>
            </components.HeaderContainer>
        )
    }

    public renderFooter() {
        return (
            <components.FooterContainer className="flex-row align-items-center">
                <div className="flex-basis-3">Trems to use</div>
                <div className="flex-basis-3">Hyperlink Policy</div>
                <div className="flex-basis-6">
                    ©Copyright. HSBC Bank Company Limited 2020. All rights
                    reserved.
                </div>
            </components.FooterContainer>
        )
    }

    public renderForm() {
        return (
            <components.FormContainer>
                <Consumer of={UserStore}>
                    {userStore => (
                        <components.FormWrapper>
                            <div className="form-header">Login</div>
                            <Form
                                size="large"
                                labelCol={{ span: 6 }}
                                className="form-content"
                                name="login-form"
                                initialValues={{ remember: true }}
                                onFinish={data =>
                                    this.onSubmit(data, userStore)
                                }
                            >
                                <Form.Item
                                    label="User ID"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your user ID!'
                                        }
                                    ]}
                                >
                                    <Input className="form-input" />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your password!'
                                        }
                                    ]}
                                >
                                    <Input.Password className="form-input" />
                                </Form.Item>

                                <Form.Item>
                                    <div className="flex-row justify-content-center">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="submit-button"
                                        >
                                            Sign In
                                        </Button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </components.FormWrapper>
                    )}
                </Consumer>
            </components.FormContainer>
        )
    }

    private onSubmit(data, { login }) {
        // 存储用户的登录信息
        login({
            token: Math.random().toString(32)
        })
        // 进入系统首页
        this.props.history.push('/dashboard')
    }
}
