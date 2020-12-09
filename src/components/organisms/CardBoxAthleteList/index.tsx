import React from 'react';
import Title from '../../atoms/Title';
import './styles.css';

export default function CardBoxAthleteList() {
    const cardAthleteProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        boxShadow: 'inset 0 0 2px rgba(68, 68, 68, 0.2)',
        display: 'grid',
    }
    const tableRankingProps = {
        width: '100%',
        boxShadow: 'inset 0 0 10px rgba(68, 68, 68, 0.2)',
    }
    return(
        <div id="TableAthletesList" style={cardAthleteProps}>
            <div style={{padding: 15}}>       
                <table style={tableRankingProps}>
                    <tr>
                        <th><Title title='Rank'/></th>
                        <th><Title title='Atleta'/></th>
                        <th><Title title='Categoria'/></th>
                        <th><Title title='Pontos'/></th>
                    </tr>
                    {athleteList.map(list => (
                        <tr>
                            <td><Title title={list.rank + 'º'} /></td>
                            <td><Title title={list.name} /></td>
                            <td><Title title={list.category} /></td>
                            <td><Title title={list.points} /></td>
                        </tr>
                        ))}
                </table>
            </div>
        </div>
    );
}

const athleteList = [
    {
        rank: '1',
        name: 'Texugo',
        category: 'RX',
        points: '350',
    }
]