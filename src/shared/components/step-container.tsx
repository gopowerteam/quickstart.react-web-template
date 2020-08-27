import React, { ReactNode, ComponentClass } from 'react'
import styled from 'styled-components'
import { Steps, Button } from 'antd'
import { Observable } from 'rxjs'
import StepItem from './step-item'
import { StepComponent } from '~/core/interfaces/setp.interface'
const components = {
    Wrapper: styled.section``,
    StepsContainer: styled.div`
        padding: 10px 20px;
    `,
    ContentContainer: styled.div``,
    ActionContainer: styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        padding: 10px 20px;

        & > * {
            margin: 0 10px;
        }
    `
}

interface ComponentProp {
    title?: string
    onSubmit?: Function
}

interface ComponentState {
    currentStep: number
}
export default class StepContainer extends React.Component<
    ComponentProp,
    ComponentState
> {
    private stepElements: any = []
    private dataSource: any[] = []

    constructor(props) {
        super(props)

        this.state = {
            currentStep: 0
        }
    }
    public render() {
        return (
            <components.Wrapper>
                {this.renderStepContainer()}
                {this.renderContentContainer()}
                {this.renderActionContainer()}
            </components.Wrapper>
        )
    }

    public renderStepContainer() {
        const { currentStep } = this.state
        return (
            <components.StepsContainer>
                <Steps current={currentStep}>{this.getStepItems()}</Steps>
            </components.StepsContainer>
        )
    }

    public renderContentContainer() {
        // 当前步骤
        const { currentStep } = this.state
        // 内容节点
        const content = this.getCurrentStepContent()

        const element = React.createElement(content, {
            ref: element => (this.stepElements[currentStep] = element)
        })

        return (
            <components.ContentContainer>{element}</components.ContentContainer>
        )
    }

    public renderActionContainer() {
        const { currentStep } = this.state
        const isFirstStep = currentStep === 0
        const isLastStep =
            currentStep === React.Children.count(this.props.children) - 1

        return (
            <components.ActionContainer>
                {!isFirstStep && (
                    <Button type="primary" onClick={() => this.onPreStep()}>
                        上一步
                    </Button>
                )}
                {!isLastStep && (
                    <Button type="primary" onClick={() => this.onNextStep()}>
                        下一步
                    </Button>
                )}
                {isLastStep && (
                    <Button
                        type="primary"
                        onClick={() => this.onNextStep(true)}
                    >
                        提交
                    </Button>
                )}
            </components.ActionContainer>
        )
    }

    private async onPreStep() {
        const { currentStep } = this.state
        this.setState({
            currentStep: currentStep - 1
        })
    }

    private async onNextStep(finish?) {
        const { currentStep } = this.state
        const currentContent = this.stepElements[currentStep] as StepComponent

        const result = await currentContent.onSubmit()

        if (!result) {
            return
        }

        if (result && typeof result !== 'boolean') {
            this.dataSource[currentStep] = result
        }

        if (finish) {
            const { onSubmit } = this.props
            onSubmit && onSubmit(this.dataSource)
        } else {
            this.setState({
                currentStep: currentStep + 1
            })
        }
    }

    private getStepItems() {
        return React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement(child)) {
                return (
                    <Steps.Step
                        title={child.props.title}
                        key={index}
                    ></Steps.Step>
                )
            }
            return child
        })
    }

    private getCurrentStepContent() {
        // 当前步骤
        const { currentStep } = this.state
        // 内容节点
        let content: any

        React.Children.forEach(this.props.children, (child, index) => {
            if (
                React.isValidElement(child) &&
                index === currentStep &&
                !content
            ) {
                content = child.props.component
            }
        })

        return content
    }
}
