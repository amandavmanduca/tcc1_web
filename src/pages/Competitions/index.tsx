import React, { useEffect } from 'react';
import HeaderRanking from '../../components/organisms/HeaderRanking';
import HeaderSeason from '../../components/organisms/HeaderSeason';
import Menu from '../../components/organisms/Menu';
import TableCompetitions from '../../components/organisms/TableCompetitions';


export default function Competitions() {
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
            <TableCompetitions />
        </div>
    );
}