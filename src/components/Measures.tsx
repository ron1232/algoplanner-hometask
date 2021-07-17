import { ReactElement } from 'react';
import { Measures } from '../utils/measures';

const MeasuresComponent: React.FC<Measures> = ({
  pages,
  length,
  height,
  width,
}): ReactElement => {
  return (
    <>
      {/* pages is defined and is equal to 1 => displays '1 page' */}
      {pages && pages === 1 && '1 page'}
      {/* pages is defined and is more than 1 => displays for example: 12 pages */}
      {pages && pages > 1 && `${pages} pages`}
      {/* length is defined => displays for example: 19 seconds */}
      {length && `${length} seconds`}
      {/* width and height are defined => displays for example: 520x480px */}
      {width && height && `${width}x${height}px`}
    </>
  );
};

export default MeasuresComponent;
