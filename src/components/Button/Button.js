import React from 'react';
import * as s from './Button.elements';

const Button = ({ ...props }) => {

    return (
        <>
            <s.Button customColor={props.customColor}>
                <s.Text customColor={props.customColor}>{props.tagText}</s.Text>
            </s.Button>
        </>
    )
}

export default Button;