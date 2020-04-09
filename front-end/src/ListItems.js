import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactMail from '@material-ui/icons/ContactMail';
import Filter3 from '@material-ui/icons/Filter3';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/core/styles';

import {
    Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    noStyleLink: {
        color: 'inherit', 
        textDecoration: 'inherit'
    }
}))
export const MainListItems = () => {
    const classes = useStyles()
    return (
        <div>
            <ListItem button component={Link} to="/" className={classes.noStyleLink}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Social" />
            </ListItem>
            <ListItem button component={Link} to="/3d-printing-form" className={classes.noStyleLink}>
                <ListItemIcon>
                    <Filter3 />
                </ListItemIcon>
                <ListItemText primary="Help With 3d Printing" />
            </ListItem>
            <ListItem button component={Link} to="/volunteer-form" className={classes.noStyleLink}>
                <ListItemIcon>
                    <ContactMail />
                </ListItemIcon>
                <ListItemText primary="Volunteer" />
            </ListItem>
            <ListItem button component={Link} to="/by-the-numbers" className={classes.noStyleLink}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="By The Numbers" />
            </ListItem>
        </div>
    );
}

export const secondaryListItems = (
    <div>
        {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
    </div>
);