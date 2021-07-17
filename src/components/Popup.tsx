import { ReactElement } from 'react';
import Iframe from 'react-iframe';
import { useStyles } from '../styles/popupSyles';
import { Popup } from '../utils/popup';

const PopupComponent: React.FC<Popup> = ({
  mime,
  content,
  name,
}): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.popupContainer}>
      {mime.toLowerCase().includes('image') && (
        <img src={content} alt={name} className='my-photo' />
      )}
      {mime.toLowerCase().includes('video') && (
        <video className={classes.video} height='350px' width='100%' controls>
          <source src={content} type={mime} />
        </video>
      )}
      {mime.toLowerCase().includes('pdf') && (
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
