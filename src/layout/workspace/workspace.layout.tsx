import React, { Component, Props } from 'react'
import styled from 'styled-components'
import Header from './components/header.component'
import Footer from './components/footer.component'
import Navigate from './components/navigate.component'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    LayoutWrapper: styled.section`
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    `,
    HeaderWrap: styled.div`
        flex-basis: 60px;
        height: 60px;
        min-height: 60px;
        position: relative;
        background-color: ${props => props.theme.header.background};
        color: ${props => props.theme.header.color};
    `,
    NagivateWrap: styled.div`
        flex-basis: 40px;
        height: 40px;
        min-height: 40px;
        overflow: auto;
        position: relative;
        background-color: ${props => props.theme.nagivate.background};
        color: ${props => props.theme.nagivate.color};
    `,
    FooterWrap: styled.div`
        flex-basis: 100px;
        height: 100px;
        min-height: 100px;
        position: relative;
    `,
    ContentWrap: styled.div`
        flex: 1;
        position: relative;
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

interface WorkspaceLayoutProps {}
interface WorkspaceLayoutState {}

export default class WorkspaceLayout extends Component<
    RouteComponentProps<WorkspaceLayoutProps>,
    WorkspaceLayoutState
> {
    public render() {
        return (
            <components.LayoutWrapper className="full-absolute">
                {this.layoutHeader()}
                {this.layoutMenu()}
                {this.lauyoutContent()}
                {this.lauyoutFooter()}
            </components.LayoutWrapper>
        )
    }

    public layoutHeader() {
        return (
            <components.HeaderWrap>
                <Header></Header>
            </components.HeaderWrap>
        )
    }

    public layoutMenu() {
        return (
            <components.NagivateWrap>
                <Navigate {...this.props}></Navigate>
            </components.NagivateWrap>
        )
    }

    public lauyoutFooter() {
        return (
            <components.FooterWrap>
                <Footer></Footer>
            </components.FooterWrap>
        )
    }

    public lauyoutContent() {
        return (
            <components.ContentWrap>
                {this.props.children}
            </components.ContentWrap>
        )
    }
}
