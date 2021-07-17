import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    popupContainer: {
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        border: '0.5px solid #ccc'
    },
    iframe: {
        border: 'none'
    },
    p: {
        textAlign: 'center',
    }
  }));