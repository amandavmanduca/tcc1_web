import React from 'react';
import MainTitle from '../../atoms/MainTitle';

export default function HeaderSeason() {
    const headerProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        minHeight: '70px',
        borderBottom: 'solid white 2px',
    }
    return(
        <div style={headerProps}>
            <MainTitle mainTitle="CrossRanking 2019" />
        </div>
    );
}