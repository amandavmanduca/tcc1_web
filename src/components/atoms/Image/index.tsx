import React from 'react';

type Props = {
    image: string;
    width: string;
    title: string;
}

export default function Image({image, title, width}: Props) {
    return(
        <img
            src={image}
            style={{
                width: `${width}`,
                borderRadius: '50%',
                justifySelf: 'center',
                height: `${width}`,
            }}
            alt={title}
        />
    );
}