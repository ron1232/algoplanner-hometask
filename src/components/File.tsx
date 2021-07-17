import React, { ReactElement } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { File } from '../utils/file';
import { useStyles } from '../styles/fileStyles';
import PictureComponent from './Picture';
import MeasuresComponent from './Measures';
import SimpleModal from './Modal';
import { useState } from 'react';

const FileComponent: React.FC<{ file: File }> = ({ file }): ReactElement => {
  const [open, setOpen] = useState<boolean>(false); // handles the opening and closing of the modal

  const handleOpen = () => {
    // sets the modal to be displayed
    setOpen(true);
  };

  const handleClose = () => {
    // sets the modal to be hidden
    setOpen(false);
  };

  const classes = useStyles(); // gets the styles of this component
  return (
    <React.Fragment key={file?.name}>
      <Paper className={classes.paper} onClick={handleOpen}>
        <Grid container spacing={2}>
          <Grid className={classes.iconContainer} item>
            <PictureComponent /* Picture Handling - Chooses which picture to display */
              classes={classes}
              mime={file?.mime}
            />
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
                  <MeasuresComponent /* Measures Handling - Chooses which measure to display */
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
      <SimpleModal /* Modal */
        handleClose={handleClose}
        open={open}
        name={file?.name}
        mime={file?.mime}
      />
    </React.Fragment>
  );
};

export default FileComponent;
