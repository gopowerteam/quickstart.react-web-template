import React, { Component, Props } from 'react'
import styled from 'styled-components'

const components = {
    ComponentWrap: styled.section`
        height: 100px;
        flex-basis: 100px;
    `,
    FooterFirst: styled.section`
        height: 50px;
        flex-basis: 50px;
        background-color: #253038;
        font-size: 12px;
        font-style: Regular;
        color: #ffffff;
        text-align: center;
        font-style: Thin;
        font-family: Univers Next;
        padding: 0 10px;
    `,
    FooterSecond: styled.section`
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

const styles = (
    props?: Props<any>
): { [key: string]: React.CSSProperties } => ({
    split: {
        height: '23px',
        width: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)'
    }
})

export default class Footer extends Component {
    public render() {
        return (
            <components.ComponentWrap>
                {this.renderFooterFirst()}
                {this.renderFooterSecond()}
            </components.ComponentWrap>
        )
    }
    public renderFooterFirst() {
        return (
            <components.FooterFirst className="flex-row align-items-center">
                <div style={styles().split}></div>
                <div className="flex-basis-2">Online security</div>
                <div style={styles().split}></div>
                <div className="flex-basis-2">HSBC Global</div>
                <div style={styles().split}></div>
                <div className="flex-basis-2">Customer support</div>
                <div className="flex-basis-6"> </div>
            </components.FooterFirst>
        )
    }
    public renderFooterSecond() {
        return (
            <components.FooterSecond className="flex-row align-items-center">
                <div className="flex-basis-2">Terms & Conditions of use</div>
                <div className="flex-basis-2">
                    Privacy and data protection statement
                </div>
                <div className="flex-basis-2">
                    HSBCnet condition of national language use
                </div>
                <div className="flex-basis-3">沪ICP备15029387号</div>
                <div className="flex-basis-3">© HSBC Bank plc 2018</div>
            </components.FooterSecond>
        )
    }
}
