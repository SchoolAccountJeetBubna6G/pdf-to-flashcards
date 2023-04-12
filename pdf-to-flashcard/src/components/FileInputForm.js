import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

function FileInputForm() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const generateText = ()=>{
    Tesseract.recognize(
      file,
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      setText(text);
    })
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the selected file
    console.log(file)
    generateText();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="file" className="btn btn-primary btn-lg" onChange={handleFileChange} />
      <br />
      <button type="submit" disabled={!file} className='SubmitButton'>
        Submit
      </button> 
    </form>
    <h3>{text}</h3>
    </div>
    
  );
}

export default FileInputForm;