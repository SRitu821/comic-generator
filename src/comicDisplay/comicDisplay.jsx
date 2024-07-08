import React from 'react';
import "./comicDisplay.css"
const ComicDisplay = ({ comicImages }) => {
  return (
    <div className='image-gallery'>
      {comicImages.map((comicPanel, index) => (
        <img className='image_generated'
          key={index}
          src={URL.createObjectURL(comicPanel.image)}
          alt={`Comic Panel ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ComicDisplay;