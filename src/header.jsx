import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import tinder from './tinder.png';
const Header = () => {
    return (
        <div className="header">
            <IconButton>

            <PersonIcon fontSize="large" className="header__icon"/>

            </IconButton>
            <IconButton>

            <img src={tinder} className="header__logo"/>
            </IconButton>
            <IconButton>
                <ForumIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default Header
