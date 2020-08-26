import React, { Component } from 'react'
import styled from 'styled-components'

const components = {
    ComponentWrap: styled.section`
        height: 50px;
        flex-basis: 50px;
        background-color: #1d262c;
        font-size: 12px;
        font-style: Regular;
        color: #ffffff;
        text-align: center;
        font-style: Thin;
        font-family: UniversNextW05-Light;
    `
}

export default class Footer extends Component {
    public render() {
        return (
            <components.ComponentWrap className="flex-row align-items-center">
                <div className="flex-basis-2">Terms & Conditions of use</div>
                <div className="flex-basis-2">
                    Privacy and data protection statement
                </div>
                <div className="flex-basis-2">
                    HSBCnet condition of national language use
                </div>
                <div className="flex-basis-3">沪ICP备15029387号</div>
                <div className="flex-basis-3">© HSBC Bank plc 2018</div>
            </components.ComponentWrap>
        )
    }
}
