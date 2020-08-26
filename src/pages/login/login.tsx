import React, { Component, Props } from 'react'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    Wrapper: styled.section`
        background-image: url('/images/login-bg.png');
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    FormContainer: styled.section`
        color: #000;
        width: 500px;
        height: 320px;
        background-color: #fff;
        border-radius: 10px;
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
        return <components.Wrapper>{this.renderForm()}</components.Wrapper>
    }

    public renderForm() {
        return (
            <components.FormContainer>
                <div className="form-header">Login</div>
                <Form
                    size="large"
                    labelCol={{ span: 6 }}
                    className="form-content"
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={data => this.onSubmit(data)}
                >
                    <Form.Item
                        label="User ID"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your user ID!'
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
                                message: 'Please input your password!'
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
            </components.FormContainer>
        )
    }

    private onSubmit(data) {
        this.props.history.push('/dashboard')
    }
}
