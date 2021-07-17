import { useStyles } from '../styles/modalStyles';
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import Iframe from 'react-iframe';

function getModalStyle(): React.CSSProperties {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const SimpleModal: React.FC<{
  open: boolean;
  handleClose: any;
  name: string;
  mime: string;
}> = ({ open, handleClose, name, mime }): ReactElement => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [content, setContent] = useState<any>();

  useEffect(() => {
    if (open) {
      setContent(`https://mighty-sierra-05836.herokuapp.com/${name}`);
    }
  }, [open, name]);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        id='simple-modal-title'
        style={{
          borderBottom: '1px solid gray',
          paddingBottom: 10,
          display: 'flex',
        }}
      >
        <Typography variant='body2' style={{ fontWeight: 700 }}>
          {name}
        </Typography>
        <Typography
          variant='body2'
          style={{ cursor: 'pointer', marginLeft: 'auto' }}
          onClick={handleClose}
        >
          <span>✕</span>
        </Typography>
      </div>
      <div id='simple-modal-description' style={{ marginTop: '1rem' }}>
        {mime.toLowerCase().includes('image') ? (
          <img src={content} alt={name} className='my-photo' />
        ) : (
          <Iframe
            url={content}
            position='relative'
            width='100%'
            height='500px'
            styles={{ border: 'none' }}
            allowFullScreen
          />
        )}
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      {body}
    </Modal>
  );
};

export default SimpleModal;
