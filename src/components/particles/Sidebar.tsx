import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocalHospital from '@material-ui/icons/LocalHospital';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import { useStylesSidebar, useStylesList } from '../useStyles';


export default function Sidebar(): JSX.Element {
  const classes = useStylesSidebar();
  const classesList = useStylesList();
  const [open, setOpen] = React.useState(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <div
      className={classes.root}
      data-testid="sidebar"
    >
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              data-testid="sidebar-home"
            />
          </ListItem>
          <ListItem button component={Link} to="/patients">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Patients"
              data-testid="sidebar-patients"
            />
          </ListItem>
          <ListItem button component={Link} to="/studies">
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText
              primary="Studies"
              data-testid="sidebar-studies"
            />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <LocalHospital />
            </ListItemIcon>
            <ListItemText
              primary="OR"
              data-testid="sidebar-or"
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classesList.nested}
                component={Link}
                to="/doctors"
              >
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Doctors"
                  data-testid="sidebar-doctors"
                />
              </ListItem>
              <ListItem
                button
                className={classesList.nested}
                component={Link}
                to="/rooms"
              >
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Rooms"
                  data-testid="sidebar-rooms"
                />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button component={Link} to="/calendar">
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Schedule"
              data-testid="sidebar-schedule"
            />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
