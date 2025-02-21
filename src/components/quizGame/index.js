import StyledBox from "../StyledBox"
import { BackgroundContainer, GameOverText, GameOverBackground, NumberInput, OptionsContainer, Question, QuestionBorderBox, QuestionContainer, QuestionMainBox, ScoreText, SubmitButton } from "./styledComponents"
import Header from "../Header"
import { GamePageBackground } from "./styledComponents"
import { useState, useEffect } from "react"

const QuestionsList = {
    1: {
        question: "1. Which planet is closest to the Sun?",
        options: ["A. Venus", "B. Mercury", "C. Earth", "D. Mars"],
    },
    2: {
        question: "2. Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
        options: ["A. Stack", "B. Queue", "C. Tree", "D. Graph"],
    },
    3: {
        question: "3. Which of the following is primarily used for structuring web pages?",
        options: ["A. Python", "B. Java", "C. HTML", "D. C++"],
    },
    4: {
        question: "4. Which chemical symbol stands for Gold?",
        options: ["A. Au", "B. Gd", "C. Ag", "D. Pt"],
    },
    5: {
        question: "5. Which of these processes is not typically involved in refining petroleum?",
        options: ["A. Fractional distillation", "B. Cracking", "C. Polymerization", "D. Filtration"],
    },
    6: { question: "6. What is the value of 12 + 28?" },
    7: { question: "7. How many states are there in the United States?" },
    8: { question: "8. In which year was the Declaration of Independence signed?" },
    9: { question: "9. What is the value of pi rounded to the nearest integer?" },
    10: { question: "10. If a car travels at 60 mph for 2 hours, how many miles does it travel?" },
}

const AnswersList = {
    1: "B",
    2: "B",
    3: "C",
    4: "A",
    5: "D",
    6: 40,
    7: 50,
    8: 1776,
    9: 3,
    10: 120,
}

const QuizGame = () => {
    const [score, updateScore] = useState(0)
    const [selectedOption, updateSelectedOption] = useState('')
    const [questionNumber, updateQuestionNumber] = useState(1)
    const [answer, updateAnswer] = useState('')
    const [timer, updateTimer] = useState(10)

    if (selectedOption !== '') {
        if (selectedOption.charAt(0) === AnswersList[questionNumber]) {
            updateScore(prevState => prevState += 1)
            updateSelectedOption('')
            updateQuestionNumber(prevState => prevState += 1)
            updateTimer(10)
        } else {
            updateQuestionNumber(prevState => prevState += 1)
            updateSelectedOption('')
            updateTimer(10)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateTimer(timer - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    if (timer === 0) {
        updateTimer(10)
        updateQuestionNumber(prevState => prevState + 1)
    }

    const onChangeInput = event => {
        updateAnswer(event.target.value)
    }
    const onClickRestart = () => {
        updateQuestionNumber(1)
        updateScore(0)
        updateTimer(10)
    }
    const onClickSubmit = () => {
        if (parseInt(answer) === AnswersList[questionNumber]) {
            updateScore(prevState => prevState += 1)
            updateQuestionNumber(prevState => prevState += 1)
            updateAnswer('')
            updateTimer(10)
        } else {
            updateQuestionNumber(prevState => prevState += 1)
            updateAnswer('')
            updateTimer(10)
        }
    }

    return (
        <>
            {(questionNumber > 10 ? (
                <>
                    <Header score={score} timer={10} />
                    <GameOverBackground>
                        <GameOverText>Game Over</GameOverText>
                        <ScoreText>Your Score: {score}</ScoreText>
                        <SubmitButton onClick={onClickRestart}>Restart</SubmitButton>
                    </GameOverBackground> 
                </>
            ) : (
                <>
                    <Header score={score} timer={timer} />
                    <GamePageBackground>
                        <BackgroundContainer>
                            <QuestionContainer>
                                <QuestionBorderBox>
                                    <QuestionMainBox>
                                        <Question>{QuestionsList[questionNumber].question}</Question>
                                    </QuestionMainBox>
                                </QuestionBorderBox>
                                <OptionsContainer>
                                    {(QuestionsList[questionNumber].options === undefined) ? (
                                        <>
                                            <NumberInput value={answer} type="number" onChange={onChangeInput} />
                                            <SubmitButton onClick={onClickSubmit}>submit</SubmitButton>
                                        </>
                                    ) : (
                                        QuestionsList[questionNumber].options.map(eachItem => <StyledBox updateScore={updateScore} text={eachItem} updateSelectedOption={updateSelectedOption} updateQuestionNumber={updateQuestionNumber} />)
                                    )}
                                </OptionsContainer>
                            </QuestionContainer>
                        </BackgroundContainer>
                    </GamePageBackground>
                </>
            ))}
        </>
    )
}

export default QuizGame