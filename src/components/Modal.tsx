import { useStyles } from '../styles/modalStyles';
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { ApiUrl } from '../config';
import PopupComponent from './Popup';
import { ModalInterface } from '../utils/modal';

function getModalStyle(): React.CSSProperties {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const SimpleModal: React.FC<ModalInterface> = ({
  open,
  handleClose,
  name,
  mime,
}): ReactElement => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const content = `${ApiUrl}/${name}`;

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.popup} id='simple-modal-title'>
        <Typography variant='body2' style={{ fontWeight: 700 }}>
          {name}
        </Typography>
        <Typography
          variant='body2'
          className={classes.closeBtn}
          onClick={handleClose}
        >
          <span>✕</span>
        </Typography>
      </div>
      <div id='simple-modal-description'>
        <PopupComponent mime={mime} content={content} name={name} />
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      {body}
    </Modal>
  );
};

export default SimpleModal;
