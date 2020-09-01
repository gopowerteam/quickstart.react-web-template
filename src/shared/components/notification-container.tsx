import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'

const components = {
    Wrapper: styled.section`
        width: 100%;
    `
}

interface ComponentProp {
    className?: string
    title?: string
    theme?: string
}

export default class NotificationContainer extends React.Component<
    ComponentProp
> {
    private defaultTheme = 'approved'
    private themes = {
        approved: {
            background: '#E5F2F2',
            border: '1px solid #00847F',
            boxSizing: 'border-box',
            titleColor: '#00847F',
            icon: require('~/assets/images/approved.png'),
            iconText: 'Approved'
        },
        rejected: {
            background: '#F9F2F3',
            border: '1px solid #A8000B',
            paddingTop: '20px',
            titleColor: '#A8000B',
            icon: require('~/assets/images/rej.png'),
            iconText: 'Rejected'
        },
        inProgress: {
            background: '#EBEFF4',
            border: '1px solid #3E505D',
            paddingTop: '20px',
            titleColor: '#333333',
            icon: require('~/assets/images/inProgress.png'),
            iconText: 'In Progress'
        },
        verify: {
            background: '#fff',
            border: '1px solid #00847F',
            boxSizing: 'border-box',
            titleColor: '#333333',
            icon: require('~/assets/images/plus.png'),
            iconText: 'Verify'
        }
    }

    public render() {
        let { theme, className, title } = this.props
        let currentTheme = this.themes[theme ?? this.defaultTheme]

        return (
            <components.Wrapper className={className}>
                <div
                    style={{
                        background: currentTheme.background,
                        border: currentTheme.border,
                        boxSizing: currentTheme.boxSizing
                    }}
                >
                    <div
                        className="flex-row justify-content-between"
                        style={{
                            fontSize: '18px',
                            paddingLeft: '30px',
                            paddingTop: '20px',
                            fontWeight: 500
                        }}
                    >
                        <div>{title}</div>

                        <div
                            style={{
                                color: currentTheme.titleColor,
                                paddingRight: 20,
                                fontSize: '18px'
                            }}
                        >
                            <img src={currentTheme.icon}></img>
                            {currentTheme.iconText}
                        </div>
                    </div>
                    <div
                        style={{
                            fontSize: '14px',
                            paddingLeft: '30px',
                            paddingTop: '20px'
                        }}
                    >
                        {this.props.children}
                    </div>
                </div>
            </components.Wrapper>
        )
    }
}
