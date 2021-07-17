import { ReactElement } from 'react';
import Iframe from 'react-iframe';
import { useStyles } from '../styles/popupSyles';
import { Popup } from '../utils/popup';

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
        /* If the mimetype is a video => display the pdf document inside an iframe */
        <Iframe
          url={content}
          position='relative'
          width='100%'
          height='350px'
          className={classes.iframe}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default PopupComponent;
