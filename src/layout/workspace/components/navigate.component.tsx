import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import menuDataSource from '~/assets/json/menu.json'
const components = {
    Wrapper: styled.section``,
    Menu: styled(Menu)`
        background-color: ${props => props.theme.nagivate.background};
        color: ${props => props.theme.nagivate.color};
    `
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

        return (
            <components.Wrapper>
                <components.Menu
                    style={{
                        borderBottom: 'none',
                        height: '40px',
                        lineHeight: '40px'
                    }}
                    onClick={item => this.onNagivate(item)}
                    selectedKeys={[current]}
                    mode="horizontal"
                >
                    {menuDataSource.map(item => this.renderMenuItem(item))}
                </components.Menu>
            </components.Wrapper>
        )
    }

    private renderMenuItem(config) {
        if (config.children) {
            return (
                <Menu.SubMenu
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
