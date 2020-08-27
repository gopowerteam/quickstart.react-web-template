import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'

const components = {
    Wrapper: styled.section`
        width: 100%;
    `,
    HeaderContainer: styled.div`
        .title {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 40px;
            font-size: 18px;
            &:before {
                content: '';
                display: inline-block;
                height: 23px;
                width: 4px;
                background: red;
                margin-right: 10px;
            }
        }
    `
}

interface ComponentProp {
    title?: string
    background?: string
    theme?: string
}

export default class CardContainer extends React.Component<ComponentProp> {
    private defaultTheme = 'light'
    private themes = {
        light: {
            background: '#fff'
        },
        dark: {
            background: '#E4E8EA'
        }
    }

    public render() {
        let { background, theme } = this.props
        background =
            background || this.themes[theme ?? this.defaultTheme].background

        return (
            <components.Wrapper>
                <Card
                    style={{ background: background }}
                    bordered={false}
                    title={this.renderTitle()}
                >
                    {this.props.children}
                </Card>
            </components.Wrapper>
        )
    }

    public renderTitle() {
        const { title } = this.props
        return (
            <components.HeaderContainer>
                <div className="title">{title}</div>
            </components.HeaderContainer>
        )
    }
}
