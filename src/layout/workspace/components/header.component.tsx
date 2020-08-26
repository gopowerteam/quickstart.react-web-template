import React, { Component } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'
import { Consumer } from 'reto'
import { RouterStore } from '../../../store/router.store'

const components = {
    Wrapper: styled.section`
        -webkit-app-region: drag;
    `,
    HistoryWrap: styled.div`
        flex-basis: 200px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        & > i {
            padding: 10px;
            cursor: pointer;
        }
        .disabled {
            color: #c5c5c5;
        }
    `,
    MenuWrap: styled.div`
        flex: 1;
        display: flex;
        flex-wrap: nowrap;
    `,
    ToolBarWrap: styled.div`
        flex-basis: 150px;
        display: flex;
        justify-content: flex-end;
        padding: 0 10px;
        & > i {
            padding: 0 8px;
        }
    `,
    HeaderMenuItem: styled.div`
        padding: 0 15px;
        color: #7f7f7f;
        cursor: pointer;
        &:hover {
            color: #000000;
        }
        &.actived {
            color: #000000;
            font-weight: bold;
        }
    `,
    SearchWrap: styled.div`
        flex-basis: 150px;
        input {
            border-radius: 20px;
            height: 27px;
            background: #f1f1f1;
        }
        .ant-input-group-addon {
            border-radius: 20px;
        }
    `
}

interface HeaderState {
    currentMenu: any
    location: any
}

export default class Header extends Component<{}, HeaderState> {
    private history

    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.Wrapper className="full-absolute flex-row align-items-center">
                123
            </components.Wrapper>
        )
    }
}
