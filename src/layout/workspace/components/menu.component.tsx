import React, { Component } from 'react'
import styled from 'styled-components'
import { Popover } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import menuDataSource from '~/assets/json/menu.json'
import { CloseOutlined } from '@ant-design/icons'
import { Consumer } from 'reto'
import { PageStore } from '~/store/page.store'

const components = {
    Wrapper: styled.section`
        height: 100%;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
    `,
    RootWrapper: styled.div`
        font-size: 14px;
        width: 100px;
        height: 100%;
        background-color: ${props => props.theme.menu.root.background};
        color: ${props => props.theme.menu.root.color};
        font-size: 18px;
        line-height: 40px;
    `,
    TitleWrapper: styled.div`
        font-size: 14px;
        height: 100%;
        font-size: 18px;
        line-height: 40px;
        margin: 0 20px;
        border-bottom: solid 3px #db0011;
        text-align: center;
    `,
    MenuContainer: styled.section`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    `,
    LeftMenuContainer: styled.div`
        background-color: ${props => props.theme.menu.submenu.background};
        color: ${props => props.theme.menu.submenu.color};
    `,
    RightMenuContainer: styled.div`
        padding: 15px 0;
        background-color: ${props => props.theme.menu.menuitem.background};
        color: ${props => props.theme.menu.menuitem.color};
    `,
    SubMenuItemWrapper: styled.div`
        padding-left: 15px;
        color: ${props => props.theme.menu.submenu.color};
        background: ${props => props.theme.menu.submenu.background};
        cursor: pointer;
    `,
    SubMenuItem: styled.div`
        font-size: 16px;
        padding: 20px 40px;
        color: ${props => props.theme.menu.submenu.color};
        border-left: solid 3px transparent;
        &.active {
            color: ${props => props.theme.menu.submenu.activeColor};
            background: ${props => props.theme.menu.submenu.activeBackground};
            border-left-color: ${props =>
                props.theme.menu.submenu.activeBorderColor};
        }
    `,
    MenuItemWrapper: styled.div`
        padding: 5px 30px;
        width: 300px;
        font-size: 14px;
        cursor: pointer;
    `
}
interface MenuProps {}
interface MenuState {
    current: string
    activeSubMenu: string
}

export default class Navigate extends Component<
    RouteComponentProps<MenuProps>,
    MenuState
> {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            activeSubMenu: ''
        }
    }
    public render() {
        const { current } = this.state

        return (
            <components.Wrapper>
                {this.renderRootMenu()}
                {this.renderPageTitle()}
            </components.Wrapper>
        )
    }

    private renderPageTitle() {
        return (
            <components.TitleWrapper>
                <Consumer of={PageStore}>
                    {pageStore => pageStore.state.title}
                </Consumer>
            </components.TitleWrapper>
        )
    }
    private renderRootMenu() {
        return (
            <Popover
                overlayClassName="menu-container"
                content={this.renderMenuContainer()}
                trigger="click"
                placement="bottomLeft"
            >
                <components.RootWrapper className="flex-row align-items-center justify-content-center">
                    Menu
                </components.RootWrapper>
            </Popover>
        )
    }

    private renderMenuContainer() {
        return (
            <components.MenuContainer>
                {this.renderLeftMenuContainer()}
                {this.renderRightMenuContainer()}
            </components.MenuContainer>
        )
    }

    private renderLeftMenuContainer() {
        return (
            <components.LeftMenuContainer>
                {menuDataSource.map(subMenu => this.renderSubMenuItem(subMenu))}
            </components.LeftMenuContainer>
        )
    }

    private renderRightMenuContainer() {
        const { activeSubMenu } = this.state

        const activeMenu = menuDataSource.find(x => x.name === activeSubMenu)

        return (
            <components.RightMenuContainer>
                {activeSubMenu &&
                    activeMenu?.children.map(menu => this.renderMenuItem(menu))}
            </components.RightMenuContainer>
        )
    }

    private renderSubMenuItem(config) {
        const { activeSubMenu } = this.state
        return (
            <components.SubMenuItemWrapper
                key={config.name}
                onClick={() => this.onActiveSubMenu(config)}
            >
                <components.SubMenuItem
                    className={activeSubMenu === config.name ? 'active' : ''}
                >
                    {config.title}
                </components.SubMenuItem>
            </components.SubMenuItemWrapper>
        )
    }

    private renderMenuItem(config) {
        return (
            <components.MenuItemWrapper
                key={config.name}
                onClick={() => this.onNagivate(config)}
            >
                {config.title}
            </components.MenuItemWrapper>
        )
    }
    ƒ

    private onActiveSubMenu(config) {
        this.setState({
            activeSubMenu: config.name
        })
    }

    private onNagivate({ path }) {
        console.log(path, this.props.history)
        this.props.history.push(path)
    }
}
