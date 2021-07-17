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
        // if the mime type is a video then display the video icon
        <VideocamIcon className={classes.icon} />
      )}
      {mime.toLowerCase().includes('image') && (
        // if the mime type is an image then display the video icon
        <ImageIcon className={classes.icon} />
      )}
      {mime.toLowerCase().includes('pdf') && (
        // if the mime type is a pdf document then display the video icon
        <PictureAsPdfIcon className={classes.icon} />
      )}
    </>
  );
};

export default PictureComponent;
