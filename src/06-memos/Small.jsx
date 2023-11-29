//import {memo} from 'react';
import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('ME DIBUJÉ!');

    return (
        <small>{value}</small>
    )
})
