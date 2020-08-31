import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Consumer } from 'reto'
import { UserStore } from '~/store/user.store'

const components = {
    Wrapper: styled.section`
        padding: 0 20px;
    `,
    LogoContainer: styled.div`
        padding: 0 10px;
    `,
    UserContainer: styled.div`
        padding: 0 20px;
    `,
    ActionContainer: styled.div`
        padding: 0 20px;
        .action-button {
            background-color: ${props => props.theme.header.button.background};
            color: ${props => props.theme.header.button.color};
            border: none;
        }
    `
}

interface HeaderState {
    currentMenu: any
    location: any
}

export default class Header extends Component<{}, HeaderState> {
    private history

    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.Wrapper className="full-absolute flex-row justify-content-between align-items-center">
                {this.renderLogoContainer()}
                <div className="flex-row flex-nowrap align-items-center">
                    {this.renderUserContainer()}
                    {this.renderActionContainer()}
                </div>
            </components.Wrapper>
        )
    }

    private renderLogoContainer() {
        return (
            <components.LogoContainer>
                {/* <Avatar shape="square" size="large" icon={<UserOutlined />} />
                 */}
                <img
                    src={require('~/assets/images/logo1.png')}
                    height="30px"
                ></img>
            </components.LogoContainer>
        )
    }

    private renderUserContainer() {
        return (
            <Consumer of={UserStore}>
                {userStore => (
                    <components.UserContainer>
                        <div>{userStore.state.userName}</div>
                        <div>LastLogin 11/05/2020 12:25</div>
                    </components.UserContainer>
                )}
            </Consumer>
        )
    }

    private renderActionContainer() {
        return (
            <components.ActionContainer>
                <Button className="action-button">Log Off</Button>
            </components.ActionContainer>
        )
    }
}
