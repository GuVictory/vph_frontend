import React from 'react';

import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { Contacts } from '../Contacts/Contacts';
import './Header.css';

export const Header = ({ ...props }) => {
    return (
        <header className={'Header ' + props.className}>
            <Logo className={'Header_logo'} />
            <Navbar className={'Header_navbar'} />
            <Contacts />
        </header>
    );
};
