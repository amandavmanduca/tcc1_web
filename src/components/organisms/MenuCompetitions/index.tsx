import React from 'react';
import Title from '../../atoms/Title';

export default function MenuCompetitions() {

    const menuCompetitionsProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#91B0DC',
        alignItems: 'center',
        height: '100%',
        minHeight: '40px'
    }

    const detailProps = {
        margin: '0 20px',
    }

    return(
        <div style={menuCompetitionsProps}>  
            {competitions.map(competition => (
                <>
                    <Title title={competition.name} />
                    {/* <p style={detailProps}>||</p> */}
                </>
            ))}
        </div>
    );
}


const competitions = [
    {
        name: 'Geral',
    },
    {
        name: 'SuperGames',
    },
    {
        name: 'Sinos Games',
    },
    {
        name: 'Peleia Games',
    },
]