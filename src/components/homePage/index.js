import { HomePageBackground, StartButton } from "./styledComponents"
import Header from "../Header"
import {useHistory} from "react-router-dom"

const HomePage = () => {
    const history = useHistory();
    const startQuiz = () => {
        history.push('/quizgame')
    }

    return (
        <HomePageBackground>
            <Header/>
            <StartButton onClick={startQuiz}>Start Quiz</StartButton>
        </HomePageBackground>
    )
}

export default HomePage