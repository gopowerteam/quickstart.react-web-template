import React, { Component } from 'react'
import styled from 'styled-components'
import PageContainer from '~/shared/components/page-container'
import { RouteComponentProps } from 'react-router-dom'

const components = {
    PageContainer: styled(PageContainer)``
}

interface ReviewRequestFormState {}

interface ReviewRequestFormProps {}

export default class ReviewRequestForm extends Component<
    RouteComponentProps<ReviewRequestFormProps>,
    ReviewRequestFormState
> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <components.PageContainer>
                ReviewRequestForm
            </components.PageContainer>
        )
    }
}
