import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Badge } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { getFavorites } from 'store/favorites/reducers/selectors';
import { HABI_ROUTES } from 'shared/constants';
import { HabiLogo } from 'shared/assets';
import SideBar from 'shared/components/SideBar';

import { WrapperAppBar } from './StyledHeader';

export const Header = () => {
  const quantityFavorites = useSelector(getFavorites).length;

  return (
    <WrapperAppBar>
      <AppBar position='static'>
        <Toolbar>
          <SideBar />
          <Link to={HABI_ROUTES.home}>
            <img src={HabiLogo} className='logo' alt='logo' />
          </Link>
          <div className='user-info'>
            <Badge badgeContent={quantityFavorites} color='secondary'>
              <FavoriteBorderIcon />
            </Badge>
            <span className='user-text'> Steven Ruiz </span>
          </div>
        </Toolbar>
      </AppBar>
    </WrapperAppBar>
  );
};
