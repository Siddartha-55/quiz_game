import {styled} from 'styled-components'

export const GamePageBackground = styled.div`
    background-image: url('https://i.ibb.co/7x4fCvzL/Pica-enhance-20250219202321-processed-lightpdf-com.jpg');
    background-size: cover;
    background-position: bottom;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

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
    justify-content: center;
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
export const NumberInput = styled.input`
    background-color: #171A2B;
    width: 300px; 
    border: none;
    color: white;
`
export const SubmitButton = styled.button`
    background: linear-gradient(90deg, #F52CF6, #62CAEE);
    border-radius: 20px;
    border: none;
    width: 120px;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
` 
export const GameOverText = styled.h1`
    font-size: 100px;
    color: #a0fdff;
    margin: 0px;
    padding: 0px;
`
export const ScoreText = styled.p`
    color: #F463F6;
    font-size: 70px; 
    margin: 10px 0 30px 0;
    padding: 0px;

`
export const GameOverBackground = styled.div`
    background-image: url('https://i.ibb.co/7x4fCvzL/Pica-enhance-20250219202321-processed-lightpdf-com.jpg');
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`