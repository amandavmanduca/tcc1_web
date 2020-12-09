import React from 'react';

type Props = {
    placeHolder?: string;
}

const inputTextProps = {
    margin: 0,
    padding: '3px 0',
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: '14px',
    backgroundColor: '#fafafa',
    height: 20,
    width: '100%',
}

export default function InputText({placeHolder}: Props) {
    return(
        <input type="text" placeholder={' '+placeHolder} style={inputTextProps}/>
    );
}