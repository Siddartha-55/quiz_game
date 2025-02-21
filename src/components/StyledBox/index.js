import { OptionBorderBox, OptionMainBox, Option } from "./styledComponents"

const StyledBox = props => {
    const { text, updateSelectedOption } = props
    const onClickSelect = event => {
        updateSelectedOption(event.target.innerText)
    }

    return (
        <OptionBorderBox onClick={onClickSelect}>
            <OptionMainBox>
                <Option>{text}</Option>
            </OptionMainBox>
        </OptionBorderBox>
    )
}

export default StyledBox