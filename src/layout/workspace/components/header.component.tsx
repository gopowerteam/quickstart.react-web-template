import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Dropdown, Menu } from 'antd'
import { Avatar } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'
import { Consumer } from 'reto'
import { UserStore } from '~/store/user.store'
import { RouteComponentProps } from 'react-router-dom'

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
    `,
    MenuContainer: styled(Menu)`
        padding: 0;
        .ant-dropdown-menu-item,
        .ant-dropdown-menu-submenu-title {
            padding: 0;
        }
    `,
    MenuItem: styled(Menu.Item)`
        padding: 15px 10px !important;
        background-color: #1d262c;
        color: #969696;
        border-left: solid 5px transparent;
        font-size: 14px;

        &:hover {
            background-color: #253038;
            color: #fff;
            border-left-color: #db0011;
        }
    `
}

interface HeaderProps {}

interface HeaderState {
    currentMenu: any
    location: any
}

export default class Header extends Component<
    RouteComponentProps<HeaderProps>,
    HeaderState
> {
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
        const menu = (
            <components.MenuContainer>
                <components.MenuItem onClick={() => this.openUserProfile()}>
                    User Profile
                </components.MenuItem>
                <components.MenuItem
                    onClick={() => this.openAccountAuthotiry()}
                >
                    Account Authority
                </components.MenuItem>
            </components.MenuContainer>
        )

        return (
            <Consumer of={UserStore}>
                {userStore => (
                    <Dropdown
                        overlay={menu}
                        trigger={['click']}
                        overlayStyle={{ background: 'red' }}
                    >
                        <components.UserContainer className="flex-row align-items-center">
                            <div className="padding-right">
                                <div className="text-right">
                                    {userStore.state.userName}
                                </div>
                                <div>LastLogin 11/05/2020 12:25</div>
                            </div>
                            <DownOutlined style={{ fontSize: '16px' }} />
                        </components.UserContainer>
                    </Dropdown>
                )}
            </Consumer>
        )
    }
    private openUserProfile() {
        this.props.history.push('/pages/user-profile')
    }
    private openAccountAuthotiry() {
        this.props.history.push('/pages/account-authotiry')
    }
    private renderActionContainer() {
        return (
            <Consumer of={UserStore}>
                {userStore => (
                    <components.ActionContainer>
                        <Button
                            onClick={() => this.onLogout(userStore)}
                            className="action-button"
                        >
                            Log Off
                        </Button>
                    </components.ActionContainer>
                )}
            </Consumer>
        )
    }

    private onLogout({ logout }) {
        const { history } = this.props
        logout()
        history.push('/dashboard')
    }
}
