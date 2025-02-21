import {styled} from 'styled-components'

export const BackgroundContainer = styled.div`
    height: 100vh;
    width: 100vw;
`
export const QuestionContainer = styled.div`
    height: 80vh;
    padding: 130px 130px 0 130px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 50px 50px 0px 250px;
`
export const OptionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`
export const QuestionBorderBox = styled.div`
    background: linear-gradient(90deg, #62CAEE, #F52CF6);
    border-radius: 30px 30px 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const QuestionMainBox = styled.div`
    height: 97%;
    width: 99%;
    background-color: #171A2B;
    border-radius: 30px 30px 30px 0;
`
export const Question = styled.h1`
    color: white;
    font-size: 40px;
    padding: 30px;
`