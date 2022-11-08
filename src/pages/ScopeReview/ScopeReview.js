import React, { useState } from 'react';
import { Form, Receipt } from '../../components';
import FadeIn from '../../components/Animations/FadeIn';
import { Backdrop } from '../../globalStyles';

const Scope = () => {
    const initialValue = [
        { myArray: 0 }
    ];

    const [total, setTotal] = useState(initialValue)

    return (
        <>
            <FadeIn>
                <Backdrop scrolled={true} />
                <Receipt total={total} setTotal={setTotal} />
                <Form />
            </FadeIn>
        </>
    )
}

export default Scope;