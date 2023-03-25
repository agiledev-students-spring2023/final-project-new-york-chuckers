import React from 'react';
import './Image.css';

function Image({ src, height }) {
  return (
    <div className="image__wrapper" style={{ height }}>
      <img src={src} />
    </div>
  );
}

export default Image;
