import { HeaderContainer, Logo, Score, ScoringContainer, Timer } from "./styledComponents"

const Header = props => {
    const {score, timer} = props

    return ( 
        <HeaderContainer>
            <Logo src="https://i.ibb.co/605BfBRq/image-removebg-preview-2.png" alt="logo" />
            <ScoringContainer>
                <Score>Score: {score}</Score>
                <Timer>Timer: {timer}</Timer>
            </ScoringContainer>
        </HeaderContainer>
    )
}

export default Header