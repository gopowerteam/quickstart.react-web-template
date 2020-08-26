import React, { Component, Props } from 'react'
import styled from 'styled-components'
import { Router } from '~/router'

const components = {
    Content: styled.main`
        overflow: auto;
    `
}

// const styles = (
//     props?: Props<any>
// ): { [key: string]: React.CSSProperties } => ({
//     autoFlex: {
//         flex: 1,
//         position: 'relative'
//     },
//     full: {
//         width: '100%',
//         height: '100%'
//     }
// })

export default class DefaultLayout extends Component {
    public render() {
        return (
            <components.Content className="full-absolute">
                {this.props.children}
            </components.Content>
        )
    }
}
