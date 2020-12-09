import React from 'react';

type Props = {
    text?: string;
}

const textProps = {
    margin: 0,
    padding: 0,
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: '13px',
}

export default function Text({text}: Props) {
    return(
        <p style={textProps}>{text}</p>
    );
}