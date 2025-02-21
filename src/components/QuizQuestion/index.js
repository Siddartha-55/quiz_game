import StyledBox from "../StyledBox"
import { BackgroundContainer, OptionsContainer, Question, QuestionBorderBox, QuestionContainer, QuestionMainBox } from "./styledComponents"

const QuizQuestion = props => {
    const {questionObject, updateSelectedOption, updateQuestionNumber, updateScore} = props
    const {question, options} = questionObject

    return (
        <BackgroundContainer>
            <QuestionContainer>
                <QuestionBorderBox>
                    <QuestionMainBox>
                        <Question>{question}</Question>
                    </QuestionMainBox>
                </QuestionBorderBox>
                <OptionsContainer>
                    {options.map(eachItem => <StyledBox updateScore={updateScore} text={eachItem} updateSelectedOption={updateSelectedOption} updateQuestionNumber={updateQuestionNumber} />)}
                </OptionsContainer>
            </QuestionContainer>
        </BackgroundContainer>
    )
}

export default QuizQuestion