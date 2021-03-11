import { ReactNode, useState } from 'react';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Switch,
  Typography,
  Tooltip,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/List';
import clsx from 'clsx';
import Link from 'next/link';
import { Styles } from './Styles';

import { useContext } from 'react'
import ThemeContext from '../../../contexts/Theme'

const useStyles = Styles;

export default function LayoutWithMenuComponent({ children }) {
  const { toggleDark } = useContext(ThemeContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // menu
  const menu: Array<{ name: string; to: string; icon?: ReactNode }> = [
    { name: 'Dashboard', to: '/', icon: <DashboardIcon /> },
    { name: 'Contatos', to: '/customers', icon: <PeopleIcon /> },
    { name: 'Listas', to: '/list', icon: <ListIcon /> },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            WLIST
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menu.map((menuItem, index) => (
            <Link key={index} href={menuItem.to} passHref>
              <Tooltip title={menuItem.name} aria-label="add" arrow placement="right">
                <ListItem button component="a">
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText primary={menuItem.name} />
                </ListItem>
              </Tooltip>
            </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch  onChange={() => toggleDark()} />
        {children}
      </main>
    </div>
  );
}
