import React from 'react'
import styled from 'styled-components'
import { Card, Modal } from 'antd'

const components = {
    Wrapper: styled.section`
        width: 100%;
    `
}

interface ComponentProp {
    className?: string
    title?: string
    theme?: string
    visible: boolean
    okText: string
    content: string
    onOk?: (e: React.MouseEvent<HTMLElement>) => void
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void
}

export default class CustomizeModal extends React.Component<ComponentProp> {
    public render() {
        return <components.Wrapper>{this.renderModal()}</components.Wrapper>
    }
    public renderModal() {
        return (
            <Modal
                title={this.renderTitle()}
                visible={this.props.visible}
                okText={this.props.okText}
                onOk={this.props.onOk}
                onCancel={this.props.onCancel}
                width="580px"
                okType="default"
            >
                <div
                    style={{
                        color: '#333333',
                        fontSize: 14,
                        fontWeight: 300,
                        paddingLeft: 20
                    }}
                >
                    {this.props.content}
                </div>
            </Modal>
        )
    }

    public renderTitle() {
        let { title } = this.props

        return (
            <div className="flex-row align-items-center">
                <div>
                    <img
                        src={require('~/assets/images/modal-success.png')}
                        height="30px"
                    ></img>
                </div>
                <div
                    style={{
                        color: '#333333',
                        fontSize: 26,
                        fontWeight: 275,
                        paddingLeft: 20
                    }}
                >
                    {title}
                </div>
            </div>
        )
    }
}
