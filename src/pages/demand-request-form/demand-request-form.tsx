import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    PageContainer: styled(PageContainer)``
}

interface DemandRequestFormState {}

interface DemandRequestFormProps {}

export default class DemandRequestForm extends Component<
    RouteComponentProps<DemandRequestFormProps>,
    DemandRequestFormState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer>
                DemandRequestForm
            </components.PageContainer>
        )
    }
}
