import { ReactElement } from 'react';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import { Picture } from '../utils/picture';

const PictureComponent: React.FC<Picture> = ({
  mime,
  classes,
}): ReactElement => {
  return (
    <>
      {mime.toLowerCase().includes('video') && (
        <VideocamIcon className={classes.icon} />
      )}
      {mime.toLowerCase().includes('image') && (
        <ImageIcon className={classes.icon} />
      )}
      {mime.toLowerCase().includes('pdf') && (
        <PictureAsPdfIcon className={classes.icon} />
      )}
    </>
  );
};

export default PictureComponent;
