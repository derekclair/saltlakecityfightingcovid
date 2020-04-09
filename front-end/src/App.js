import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ByTheNumbers from './ByTheNumbers/ByTheNumbers'
import Social from './Social/Social'
import VolunteerForm from './VolunteerForm/VolunteerForm'
import ThreeDPrintingForm from './ThreeDPrintingForm/ThreeDPrintingForm'
import Box from '@material-ui/core/Box';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List } from '@material-ui/core';
import { MainListItems, secondaryListItems } from './ListItems';

import Container from '@material-ui/core/Container';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));
function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://SaltLakeCityFightingCovid.com/">
              Salt Lake City Fighting Covid
    </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
  );
}
function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          {open ?
            (<div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>) :
            (<div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerOpen}>
                <ChevronRightIcon />
              </IconButton>
            </div>)
          }
          <Divider />
          <List><MainListItems /></List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <Container className={classes.container}>
            <Switch>
              <Route path="/by-the-numbers">
                <ByTheNumbers />
              </Route>
              <Route path="/3d-printing-form">
                <ThreeDPrintingForm />
              </Route>
              <Route path="/volunteer-form">
                <VolunteerForm />
              </Route>
              <Route path="/">
                <Social />
              </Route>
            </Switch>
            <Box pt={4}>
                <Copyright />
            </Box>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
