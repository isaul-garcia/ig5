import * as s from './Form.elements'

const style = {
    color: '#333'
};

const Question = ({ setAnswer, Answer, updateReceipt, myQuestion, answerType, isSelector, myOptions, optionItem, ...props }) => {
    const handleNumberChange = (event) => {
        setAnswer(event.target.value)
    }
    return (
        <>
            <s.ItemContainer>
                <s.Question>
                    <s.TextWrapper>
                        <s.MediumText>{props.question}</s.MediumText>
                    </s.TextWrapper>
                </s.Question>
                <s.InputContainer>
                    <form onSubmit={updateReceipt}>
                        <div>
                            {isSelector ?
                                (
                                    <s.SelectorInput style={style} required>
                                        <option value="" disabled selected>{props.answerPlaceHolder}</option>

                                        {optionItem.map((props) => (
                                            <option value="0">{props}</option>
                                        ))}

                                    </s.SelectorInput>
                                )
                                :
                                <s.NumInput type='number' required placeholder={props.answerPlaceHolder} onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault() && [","].includes(evt.key)} onChange={handleNumberChange} />
                            }
                        </div>
                    </form>
                </s.InputContainer>
            </s.ItemContainer>
        </>
    )
}

export default Question;