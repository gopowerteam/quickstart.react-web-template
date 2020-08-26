import React, { Component, Props } from 'react'
import styled from 'styled-components'
import Header from './components/header.component'
import SideMenu from './components/side-menu.component'
import { Router } from '~/router'

const components = {
    HeaderWrap: styled.div`
        flex-basis: 50px;
        height: 50px;
        min-height: 50px;
        position: relative;
        background-color: #f7f7f7;
    `,
    SideMenuWrap: styled.div`
        flex-basis: 200px;
        width: 200px;
        overflow: auto;
        position: relative;
        background-color: #ededed;
    `,
    FooterWrap: styled.div`
        flex-basis: 50px;
        height: 50px;
        min-height: 50px;
        position: relative;
    `,
    ContentWrap: styled.section`
        flex: 1;
        position: relative;
    `,
    Content: styled.main`
        overflow: auto;
    `
}

const styles = (
    props?: Props<any>
): { [key: string]: React.CSSProperties } => ({
    autoFlex: {
        flex: 1,
        position: 'relative'
    },
    full: {
        width: '100%',
        height: '100%'
    }
})

export default class WorkspaceLayout extends Component {
    public render() {
        return <components.Content>{this.props.children}</components.Content>
    }

    public layoutHeader() {
        return (
            <components.HeaderWrap>
                <Header></Header>
            </components.HeaderWrap>
        )
    }

    public layoutSideMenu() {
        return (
            <components.SideMenuWrap>
                <SideMenu></SideMenu>
            </components.SideMenuWrap>
        )
    }

    public lauyoutFooter() {
        return (
            <components.FooterWrap>
                {/* <Footer></Footer> */}
            </components.FooterWrap>
        )
    }

    public lauyoutContent() {
        return (
            <components.ContentWrap>
                <components.Content className="full-absolute">
                    {this.props.children}
                </components.Content>
            </components.ContentWrap>
        )
    }
}
