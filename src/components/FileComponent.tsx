import { ReactElement } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { File } from '../utils/file';
import { useStyles } from '../styles/classes';
import Picture from './Picture';
import MeasuresComponent from './MeasuresComponent';

const FileComponent: React.FC<{ file: File; key: any }> = ({
  file,
  key,
}): ReactElement => {
  const classes = useStyles();
  return (
    <Paper key={key} className={classes.paper}>
      <Grid container spacing={2}>
        <Grid className={classes.iconContainer} item>
          <Picture classes={classes} mime={file.mime} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid xs direction='column'>
            <Grid xs>
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
              {file?.size?.toLocaleString()} KB
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileComponent;
