import React, { Component } from 'react'
import { Provider } from './store'
import { Router } from '~/router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '~/assets/themes/default.theme'
moment.locale('zh-cn')

export default class App extends Component {
    public render() {
        return (
            <div className="app">
                <ConfigProvider locale={zhCN}>
                    <Provider>
                        <ThemeProvider theme={defaultTheme}>
                            <Router></Router>
                        </ThemeProvider>
                    </Provider>
                </ConfigProvider>
            </div>
        )
    }
}
