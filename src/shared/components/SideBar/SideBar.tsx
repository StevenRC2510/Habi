import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, ListItem, ListItemIcon, Chip } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import { Dictionary } from 'shared/entities';
import { menuOptions } from './menuOptions';

interface Tags {
  color: string;
  background: string;
  type: string;
}

const useStyles = makeStyles({
  list: {
    width: '350px',
  },
  fullList: {
    width: 'auto',
  },
});

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
`;

export function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: Dictionary) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const specialLabel = (data: Tags) => {
    const { type, color, background } = data;
    switch (type) {
      case 'new':
        return <Chip label={type} style={{ background, color }} />;
      case 'special':
        return <Chip label={type} style={{ background, color }} />;
      default:
        return <Chip label='Coming soon' style={{ background, color }} />;
    }
  };

  const list = () => (
    <div className={classes.list} role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {menuOptions.map(({ id, name, route, ...rest }, index) => (
          <ListItem button key={`field-side-${id}`}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <LinkStyled to={route}>
              <span> {name} </span>
              {specialLabel({ ...rest })}
            </LinkStyled>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer anchor='left' open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </>
    </div>
  );
}
