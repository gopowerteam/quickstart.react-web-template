import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu, Popover } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import menuDataSource from '~/assets/json/menu.json'
import { CloseOutlined } from '@ant-design/icons'
const components = {
    Wrapper: styled.section`
        height: 100%;
        margin-left: 20px;
    `,
    RootWrapper: styled.div`
        font-size: 14px;
        width: 100px;
        height: 100%;
        background-color: ${props => props.theme.menu.root.background};
        color: ${props => props.theme.menu.root.color};
        font-size: 18px;
        line-height: 40px;
        .icon {
            font-size: 24px;
            font-weight: bold;
        }
    `,
    MenuContainer: styled.section``
}
interface NavigateProps {}
interface NavigateState {
    current: string
}

export default class Navigate extends Component<
    RouteComponentProps<NavigateProps>,
    NavigateState
> {
    constructor(props) {
        super(props)
        this.state = {
            current: ''
        }
    }
    public render() {
        const { current } = this.state

        return <components.Wrapper>{this.renderRootMenu()}</components.Wrapper>
    }

    private renderRootMenu() {
        return (
            <Popover content={this.renderMenuContainer()} trigger="click">
                <components.RootWrapper className="flex-row align-items-center justify-content-center">
                    <span className="icon">
                        <CloseOutlined />
                    </span>
                    Menu
                </components.RootWrapper>
            </Popover>
        )
    }

    private renderMenuContainer() {
        return <components.MenuContainer></components.MenuContainer>
    }

    private renderMenuItem(config) {
        if (config.children) {
            return (
                <Menu.SubMenu
                    style={{ background: 'red' }}
                    key={config.name}
                    title={config.title}
                    popupClassName="popue-menu-container"
                >
                    {config.children.map(item => this.renderMenuItem(item))}
                </Menu.SubMenu>
            )
        }

        if (config.path) {
            return <Menu.Item key={config.path}>{config.title}</Menu.Item>
        }
    }

    private onNagivate({ key: path }) {
        this.props.history.push(path)
    }
}
