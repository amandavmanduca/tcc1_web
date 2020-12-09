import React from 'react';

type Props = {
    subtitle?: string;
}

const subtitleProps = {
    margin: 0,
    padding: 0,
    fontFamily: "Open Sans",
    fontWeight: 500,
    fontSize: '20px',
}

export default function Subsubtitle({subtitle}: Props) {
    return(
        <h2 style={subtitleProps}>{subtitle}</h2>
    );
}