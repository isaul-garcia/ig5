import React, { useState } from 'react';
import { MediumSpacer } from '../../globalStyles';
import * as s from './Form.elements'

const Question = ({ Answer }) => {
    
    const [total, setTotal] = useState([])

    const handleNumberChange = (event) => {
        setTotal(event.target.value)
    }

    return (
        <>
            <MediumSpacer total={total}/>
            <h4>Receipt</h4>
            <MediumSpacer />

            <s.CardSection>
                <s.CardWrapper>
                    <s.ItemContainer>
                        <s.ReceiptSection boxColor={'#e6bf39'}>
                            <s.TextWrapper>
                                <s.ReceiptText isMain={true}>Planning</s.ReceiptText>
                            </s.TextWrapper>
                            
                        </s.ReceiptSection>
                        
                        <s.ReceiptSection boxColor={'#f0db93'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Project Brief</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#f0db93'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Kick off Meeting</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#f0db93'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Staker Meetings</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#f0db93'}>
                            <s.RowWrapper>
                                <s.ReceiptText>R&D</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>
                    </s.ItemContainer>
                </s.CardWrapper>

                <s.CardWrapper>
                    <s.ItemContainer>
                        <s.ReceiptSection boxColor={'#78e337'}>
                            <s.TextWrapper>
                                <s.ReceiptText isMain={true}>Design</s.ReceiptText>
                            </s.TextWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#78e337'}>
                            <s.TextWrapper>
                                <s.ReceiptText>Mood Boards</s.ReceiptText>
                            </s.TextWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#b6f093'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Round 1</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#b6f093'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Round 2</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#78e337'}>
                            <s.TextWrapper>
                                <s.ReceiptText>Wireframes</s.ReceiptText>
                            </s.TextWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#b6f093'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Round 1</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#b6f093'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Round 2</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#78e337'}>
                            <s.TextWrapper>
                                <s.ReceiptText>Page Design</s.ReceiptText>
                            </s.TextWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#b6f093'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Round 1</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#b6f093'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Round 2</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText isDollar={true}>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>
                    </s.ItemContainer>
                </s.CardWrapper>

                <s.CardWrapper>
                    <s.ItemContainer>
                        <s.ReceiptSection boxColor={'#f260ef'}>
                            <s.TextWrapper>
                                <s.ReceiptText isMain={true}>Development</s.ReceiptText>
                            </s.TextWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#f0aef0'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Frontend Interface</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#f0aef0'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Backend Technical</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#f0aef0'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Content Entry</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                    isHour={true}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>

                        <s.ReceiptSection boxColor={'#f0aef0'}>
                            <s.RowWrapper>
                                <s.ReceiptText>Animate</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>hr</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true} isDollar={true}>
                                <s.ReceiptText>$</s.ReceiptText>
                            </s.RowWrapper>
                            <s.RowWrapper isLast={true}>
                                <s.ReceiptInput
                                    type='number'
                                    defaultValue=""
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onChange={handleNumberChange}
                                />
                            </s.RowWrapper>
                        </s.ReceiptSection>
                    </s.ItemContainer>
                </s.CardWrapper>
            </s.CardSection>

            <s.TotalSection boxColor={'#1b1b1b'}>
                <s.RowWrapper>
                    <s.ReceiptText isTotal={true} customColor={'#bcbcbc'}>Total</s.ReceiptText>
                </s.RowWrapper>
                <s.RowWrapper isLast={true} isDollar={true}>
                    <s.ReceiptText customColor={'#bcbcbc'}>$</s.ReceiptText>
                </s.RowWrapper>
                <s.RowWrapper isLast={true} isTotal={true}>
                    <s.ReceiptInput
                        isTotal={true}
                        type='number'
                        defaultValue=""
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                        onChange={handleNumberChange}
                    />
                </s.RowWrapper>
            </s.TotalSection>
        </>
    )
}

export default Question;