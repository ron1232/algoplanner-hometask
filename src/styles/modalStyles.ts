import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '0.25rem',
      padding: theme.spacing(2, 4, 3),
      outline: 'none',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      }
    },
    popup: {
      borderBottom: '1px solid gray',
      paddingBottom: 10,
      display: 'flex',
    },
    closeBtn: {
      cursor: 'pointer',
      marginLeft: 'auto'
    }
  }));