import React from 'react';

type Props = {
    title?: String;
}

const titleProps = {
    margin: 0,
    padding: 0,
    fontFamily: "Open Sans",
    fontWeight: 700,
    fontSize: '15px',
}

export default function Title({title}: Props) {
    return(
        // <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={titleProps}>{title}</h1>
        // </div>
    );
}