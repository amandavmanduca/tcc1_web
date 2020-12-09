import React from 'react';
import HeaderRanking from '../../components/organisms/HeaderRanking';
import HeaderSeason from '../../components/organisms/HeaderSeason';
import Menu from '../../components/organisms/Menu';
import MenuCompetitions from '../../components/organisms/MenuCompetitions';
import TableRanking from '../../components/organisms/TableRanking';
import Teste from '../../components/atoms/Teste';


export default function Leaderboard() {
    const pageProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'inline-block',
    }
    return(
        <div style={pageProps}>
            <HeaderSeason />
            <HeaderRanking />
            <Menu />
            <TableRanking />
            {/* <Teste /> */}
        </div>
    );
}