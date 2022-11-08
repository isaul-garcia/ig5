import React from 'react';
import { Button, Text } from './Tag.elements';

const Tag = ({ filter, val, active }) => {
    return (
        <>
            <Button active={active === val?.toString()} onClick={() => filter(val?.toString())}>
                <Text>
                    {val}
                </Text>
            </Button>
        </>
    )
}

export default Tag;