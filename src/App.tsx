import React, { ReactElement, useEffect, useState } from 'react';
import http from './utils/http';
import { File } from './utils/file';
import Container from '@material-ui/core/Container';
import FileComponent from './components/File';
import Error from './components/Error';
import { ApiUrl } from './config';

const App: React.FC = (): ReactElement => {
  const [files, setFiles] = useState<Array<File>>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    /**
     *
     * Function that fetches all files from our api
     *
     * @returns void
     *
     */
    const fetchData = async (): Promise<void> => {
      try {
        const { data, res } = await http.get(`${ApiUrl}/files`);

        if (res.ok) {
          return setFiles(data.files);
        }

        setError('Response was not okay');
      } catch (error) {
        // Error Handleling
        console.error(error);
        setError('Response was not okay');
      }
    };

    fetchData(); // calls the function
  }, []);

  return (
    <Container maxWidth='sm'>
      {error ? (
        <Error error={error} /> // Error Handling
      ) : (
        files.map((file) => <FileComponent file={file} key={file.name} />) // if error is falsy, then map over files array
      )}
    </Container>
  );
};

export default App;
