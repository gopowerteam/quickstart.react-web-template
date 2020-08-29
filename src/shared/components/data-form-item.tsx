import React from 'react'
import styled from 'styled-components'
import { Button, Table, Pagination, Form, Row, Col } from 'antd'
import { PageService } from '~/core/services/page.service'
import { ColProps } from 'antd/lib/col'
import { FormLabelAlign } from 'antd/lib/form/interface'
import { FormItemProps } from 'antd/lib/form'

const components = {
    Wrapper: styled.section``
}

interface ComponentProp extends FormItemProps {
    collapse?: boolean
}

export default class DataForm extends React.Component<ComponentProp> {
    public render() {
        return <></>
    }
}
