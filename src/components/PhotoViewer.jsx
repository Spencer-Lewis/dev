import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

function PhotoViewer({ images }) {
  return (
    <PhotoProvider>
      <div className="photo-grid">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img src={item} alt="" className="grid-item" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}

export default PhotoViewer;
