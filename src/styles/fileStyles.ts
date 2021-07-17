import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1.5),
      margin: 20,
      maxWidth: 500,
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontSize: '2.5rem',
    },
    bold: {
      fontWeight: 700,
    },
    name: {
      paddingTop: '0.25rem',
      paddingBottom: '0.5rem',
    },
    size: {
      marginTop: '-0.35rem',
    },
  }));