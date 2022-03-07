import React, { useState } from 'react';
import { Form, Info, Receipt } from '../../components';
import {  } from '../../globalStyles';

//to do:::
//
//make states
//do the math (formulas)
//add the comma thing
//receipt appear only after calculate
//maybe add a save as image thing
//add title of project (before the word recipt at top)
//revise content and deliverates with old contract note

const Scope = () => {
    const initialValue = [
        { myArray: 0 }
    ];

    const [total, setTotal] = useState(initialValue)

    return (
        <>
            <Info noTabButtons={true}/>
            <Receipt total={total} setTotal={setTotal}/>
            <Form />
        </>
    )
}

export default Scope;