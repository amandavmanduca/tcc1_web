import React from 'react';
import InputText from '../../atoms/InputText';
import Logo from '../../atoms/Logo';
import InputSelect from '../../molecules/InputSelect';
import HeaderSeason from '../HeaderSeason';
import './styles.css';

export default function HeaderRanking() {
    const headerProps = {
        margin: 0,
        padding: '0 10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        minHeight: '120px',
        borderBottom: 'solid white 2px',
    }
    return(
        <div id='headerRanking' style={headerProps}>
            <Logo />
            <InputSelect
                categories={[
                    {name: 'RX/Masculino'},
                    {name: 'RX/Feminino'},
                    {name: 'Amador/Masculino'},
                    {name: 'Amador/Feminino'},
                    {name: 'Scale/Masculino'},
                    {name: 'Scale/Feminino'},
                ]}
            />
        </div>
    );
}