import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { Contacts } from '../Contacts/Contacts';
import './Header.css';

export const Header = ({ ...props }) => {
    return (
        <header className={'Header ' + props.className}>
            <div className={'Header__logo-and-nav'}>
                <Logo className={'Header_logo'} />
                <Navbar className={'Header_navbar'} />
            </div>
            <Contacts />
        </header>
    );
};
