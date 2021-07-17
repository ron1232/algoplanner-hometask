import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error: React.FC<{ error: string }> = ({ error }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity='error'>{error}</Alert>
    </div>
  );
};

export default Error;
