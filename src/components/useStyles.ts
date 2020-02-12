import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

/**
 * All style adjustments for the components.
 */

export const useStylesSidebar = makeStyles(
  (theme: Theme) => createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: 0,
      flexShrink: 0,
      zIndex: 1000,
    },
    drawerPaper: {
      width: 240,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  }),
);

export const useStylesList = makeStyles(
  (theme: Theme) => createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

export const useStylesTable = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const useStylesModal = makeStyles(
  (theme: Theme) => createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export const useStylesForm = makeStyles(
  (theme: Theme) => createStyles({
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);
