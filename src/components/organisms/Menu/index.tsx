import React from 'react';
import MenuButton from '../../molecules/MenuButton';
import { useLocation } from 'react-router-dom';
import Title from '../../atoms/Title';

export default function Menu() {

    const location = useLocation();
    
    const menuProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        // backgroundImage: 'linear-gradient(to top left, #fcfcfc, #fafafa)',
        backgroundColor: '#fcfcfc',
        alignItems: 'center',
        height: '40px',
        marginBottom: '25px',
        borderBottom: 'solid white 2px',
    }

    const titleBoxProps = {
        margin: 0,
        padding: 0,
        width: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return(
        <div style={menuProps}>
            <MenuButton
                page={location.pathname}
                side='left'
                size={30}
            />
            <div style={titleBoxProps}>
                {(location.pathname == '/') ?
                    <Title title='Leaderboard' />
                : (location.pathname == '/competitions') ?
                    <Title title='Competições' />
                : (location.pathname == '/box') ?
                    <Title title='Box' />
                : (location.pathname == '/athlete') ?
                    <Title title='Atletas' />
                : null}
            </div>
            <MenuButton
                page={location.pathname}
                side='right'
                size={30}
            />
        </div>
    );
}