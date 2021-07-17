import { ReactElement } from 'react';
import { useStyles } from '../styles/popupSyles';
import { Popup } from '../utils/popup';
import Typography from '@material-ui/core/Typography';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const PopupComponent: React.FC<Popup> = ({
  mime,
  content,
  name,
}): ReactElement => {
  const classes = useStyles(); // gets the styles of this component

  return (
    <div className={classes.popupContainer}>
      {mime.toLowerCase().includes('image') && (
        /* If the mimetype is an image => display the image */
        <img src={content} alt={name} className='my-photo' />
      )}
      {mime.toLowerCase().includes('video') && (
        /* If the mimetype is a video => display the video */
        <video className={classes.video} height='350px' width='100%' controls>
          <source src={content} type={mime} />
        </video>
      )}
      {mime.toLowerCase().includes('pdf') && (
        /* If the mimetype is a pdf => display the pdf document inside an object */
        <object
          data={content}
          type='application/pdf'
          width='100%'
          height='400px'
        >
          <Typography variant='body2' className={classes.p}>
            Your browser can't display the pdf{' '}
            <SentimentVeryDissatisfiedIcon style={{ fontSize: '15px' }} />
            <br />
            Here's a link instead:
            <br />
            <a href={content} target='_blank' rel='noreferrer'>
              {name}
            </a>
          </Typography>
        </object>
      )}
    </div>
  );
};

export default PopupComponent;
