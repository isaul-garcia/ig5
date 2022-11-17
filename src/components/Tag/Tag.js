import React from 'react';
import { Button, Text } from './Tag.elements';

const Tag = ({ filter, val, active }) => {
    const value = val?.toString()
    return (
        <>
            <Button active={active === value} onClick={() => filter(value)}>
                <Text active={active === value}>
                    {val}
                </Text>
            </Button>
        </>
    )
}

export default Tag;