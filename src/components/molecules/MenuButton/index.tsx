import React from 'react';
import { useHistory } from 'react-router-dom';
import SideButton from '../../atoms/SideButton';

type Props = {
    side: string;
    size?: number;
    page: string;
}

export default function MenuButton({side, size, page}: Props) {
    const history = useHistory();
    function handlePush(pathname: string) {
        if (pathname == '/') {
            if (side == 'right') {
                history.push('/competitions')
            } else {
                history.push('/athlete')
            }   
        } else if (pathname == '/competitions') {
            if (side == 'right') {
                history.push('/box')
            } else {
                history.push('/')
            } 
        } else if (pathname == '/box') {
            if (side == 'right') {
                history.push('/athlete')
            } else {
                history.push('/competitions')
            } 
        } else if (pathname == '/athlete') {
            if (side == 'right') {
                history.push('/')
            } else {
                history.push('/box')
            } 
        }
    }

    return(
        <div style={{margin: 0, padding: 0}} onClick={() => handlePush(page)}>
            <SideButton
                side={side}
                size={size}
            />
        </div>
    );
}