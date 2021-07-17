import React, { ReactElement, useEffect, useState } from 'react';
import http from './utils/http';
import { File } from './utils/file';
import Container from '@material-ui/core/Container';
import FileComponent from './components/FileComponent';

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

  return (
    <Container maxWidth='sm'>
      {error ? (
        <div>
          <span>{error}</span>
        </div>
      ) : (
        files.map((file) => <FileComponent file={file} key={file.name} />)
      )}
    </Container>
  );
};

export default App;
