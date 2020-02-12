import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { useStylesSidebar } from '../useStyles';

export default function Header({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  const classes = useStylesSidebar();
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      data-testid="header"
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
