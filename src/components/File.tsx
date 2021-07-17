import React, { ReactElement } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { File } from '../utils/file';
import { useStyles } from '../styles/fileStyles';
import Picture from './Picture';
import MeasuresComponent from './Measures';
import SimpleModal from './Modal';
import { useState } from 'react';

const FileComponent: React.FC<{ file: File }> = ({ file }): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <React.Fragment key={file.name}>
      <Paper
        className={classes.paper}
        onClick={handleOpen}
        style={{ cursor: 'pointer' }}
      >
        <Grid container spacing={2}>
          <Grid className={classes.iconContainer} item>
            <Picture classes={classes} mime={file.mime} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column'>
              <Grid item xs>
                <Typography variant='body2' className={classes.bold}>
                  {file?.name}
                </Typography>
              </Grid>
              <Grid>
                <Typography variant='body2'>
                  <MeasuresComponent
                    pages={file?.pages}
                    length={file?.length}
                    height={file?.height}
                    width={file?.width}
                  />
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>
                {file?.size?.toLocaleString()}kB
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <SimpleModal
        handleClose={handleClose}
        open={open}
        name={file?.name}
        mime={file?.mime}
      />
    </React.Fragment>
  );
};

export default FileComponent;
