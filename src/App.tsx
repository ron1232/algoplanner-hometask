import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import http from './utils/http';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { File } from './utils/file';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { flexbox } from '@material-ui/system';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
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

const App: React.FC = (): ReactElement => {
  const [files, setFiles] = useState<Array<File>>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, res } = await http.get(
          'https://mighty-sierra-05836.herokuapp.com/files'
        );

        if (res.ok) {
          console.log(data.files);

          return setFiles(data.files);
        }

        setError('Response was not okay');
      } catch (error) {
        console.error(error);
        setError('Response was not okay');
      }
    };

    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <Container maxWidth='sm'>
      {error ? (
        <div>
          <span>{error}</span>
        </div>
      ) : (
        files.map((file) => (
          <Paper key={file?.name} className={classes.paper}>
            <Grid container spacing={2}>
              <Grid className={classes.iconContainer} item>
                <ImageIcon className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid xs direction='column'>
                  <Grid xs>
                    <Typography variant='body2' className={classes.bold}>
                      {file?.name}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography variant='body2'>{`${file?.length} seconds`}</Typography>
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
        ))
      )}
    </Container>
  );
};

export default App;
