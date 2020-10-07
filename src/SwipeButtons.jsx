import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import './swipeButtons.css'
const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
           
            <IconButton className="swipeButtons__left">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <CloseIcon fontSize="large"/>
            </IconButton>
        
         
           
            <IconButton className="swipeButtons__star">
                <StarIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__repeat">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
