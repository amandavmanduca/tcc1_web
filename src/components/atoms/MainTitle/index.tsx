import React from 'react';

type Props = {
    mainTitle?: String;
}

const mainTitleProps = {
    margin: 0,
    padding: 0,
    fontFamily: "Open Sans",
    fontWeight: 700,
    fontSize: '30px',
}

export default function MainTitle({mainTitle}: Props) {
    return(
        <h1 style={mainTitleProps}>{mainTitle}</h1>
    );
}