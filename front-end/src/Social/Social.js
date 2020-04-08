import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
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
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    //   fixedHeight: {
    //     height: 240 * 2,
    //   },

    noStyleLink: {
        color: 'inherit', 
        textDecoration: 'inherit'
    }
}));

export default function Social() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper}>
                            <List className={classes.root}>
                                <ListItem style={{ width: '100%' }}>
                                    <ListItemAvatar>
                                        <Avatar src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Slack" secondary={<span><a href="https://saltlakecityf-a632658.slack.com" target="_window">Join The Workspace</a></span>} />
                                </ListItem>
                                <ListItem style={{ width: '100%' }}>
                                    <ListItemAvatar>
                                        <Avatar src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Twitter" secondary={<span>With The Hash Tag <a href="https://twitter.com/hashtag/saltlakecityfightingcovid" target="_window">#saltlakecityfightingcovid</a> <br></br> and <a href="https://twitter.com/SLCFightsCovid" target="_window">@SLCFightsCovid</a></span>} />
                                </ListItem>
                                <a href="https://www.facebook.com/pg/SaltLakeCityFightingCOVID/about/?ref=page_internal" className={classes.noStyleLink} target="_window">
                                    <ListItem style={{ width: '100%' }} button>
                                        <ListItemAvatar>
                                            <Avatar src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png" />
                                        </ListItemAvatar>
                                        <ListItemText primary="Facebook" />
                                    </ListItem>
                                </a>
                                <a href="https://www.instagram.com/saltlakecityfightingcovid/" className={classes.noStyleLink} target="_window">
                                    <ListItem style={{ width: '100%' }} button>
                                        <ListItemAvatar>
                                            <Avatar src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300" />
                                        </ListItemAvatar>
                                        <ListItemText primary="Instagram" />
                                    </ListItem>
                                </a>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
}