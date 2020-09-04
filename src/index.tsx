import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'

import './assets/styles/style.less'
import bootstrap from './bootstrap/boots'

function launcher() {
    bootstrap()
        .then(() => {
            ReactDOM.render(<App />, document.getElementById('root'))
        })
        .finally(() => {
            // If you want your app to work offline and load faster, you can change
            // unregister() to register() below. Note this comes with some pitfalls.
            // Learn more about service workers: https://bit.ly/CRA-PWA
            serviceWorker.unregister()
        })
}

// 应用启动
launcher()
