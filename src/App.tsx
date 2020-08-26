import React, { Component } from 'react'
import { Provider } from './store'
import { Router } from '~/router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

export default class App extends Component {
    public render() {
        return (
            <div className="app">
                <ConfigProvider locale={zhCN}>
                    <Provider>
                        <Router></Router>
                    </Provider>
                </ConfigProvider>
            </div>
        )
    }
}
