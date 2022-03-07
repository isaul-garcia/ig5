import React, { useState } from 'react';
import { LargeSpacer, MediumSpacer } from '../../globalStyles';
import * as s from './Form.elements';
import Question from './Question';
import { myQuestions } from '../../pages/ScopeReview/Data';

const Info = () => {
    const [Answer, setAnswer] = useState('')

    return (
        <>
            <LargeSpacer />
            <h4>Scope Review</h4>
            <MediumSpacer />

            {myQuestions.map((props) => (
                <Question Answer={Answer} setAnswer={setAnswer} {...props} />
            ))}

            <s.SubmitContainer>
                <s.SubmitSection>
                    <s.TextWrapper>
                        <s.MediumText>Calculate</s.MediumText>
                    </s.TextWrapper>
                </s.SubmitSection>
            </s.SubmitContainer>
        </>
    )
}

export default Info;