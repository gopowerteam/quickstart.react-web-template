import React, { Component } from 'react'
import { Menu, Row, Col } from 'antd'
import { ReactSVG } from 'react-svg'
import { Consumer } from 'reto'
import styled from 'styled-components'
import { RouterStore } from '../../../store/router.store'

const components = {
    ComponentWrap: styled.section``,
    ReactSVG: styled(ReactSVG)`
        width: 10px;
        height: 32px;
    `
}

export default class SideMenu extends Component {
    public render() {
        return <components.ComponentWrap>123</components.ComponentWrap>
    }
}
