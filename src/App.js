import HomePage from './components/homePage';
import QuizGame from './components/quizGame';
import './App.css';
import {Route, Switch} from 'react-router-dom'

const App = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/quizgame' component={QuizGame} />
    </Switch>
)

export default App;
