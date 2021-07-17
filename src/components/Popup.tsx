import { ReactElement } from 'react';
import Iframe from 'react-iframe';

const Popup: React.FC<{ mime: string; content: string; name?: string }> = ({
  mime,
  content,
  name,
}): ReactElement => {
  return (
    <div
      style={{
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {mime.toLowerCase().includes('image') && (
        <img src={content} alt={name} className='my-photo' />
      )}
      {mime.toLowerCase().includes('video') && (
        <video
          style={{ border: '0.5px solid #ccc' }}
          height='350px'
          width='100%'
          controls
        >
          <source src={content} type={mime} />
        </video>
      )}
      {mime.toLowerCase().includes('pdf') && (
        <Iframe
          url={content}
          position='relative'
          width='100%'
          height='350px'
          styles={{ border: 'none' }}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Popup;
