import React, { useState } from 'react';
import "./comicForm.css"
const ComicForm = ({ generateComic }) => {
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateComic(textInput);
  };

  return (
    <form className='form_div' onSubmit={handleSubmit}>
      <label>
        <input className='input_name' type="text" value={textInput} onChange={handleInputChange} placeholder='A cosmic journey through vibrant galaxies.' />
      </label>
      <button className='button_name' type="submit">Generate Comic</button>
    </form>
  );
};

export default ComicForm;
