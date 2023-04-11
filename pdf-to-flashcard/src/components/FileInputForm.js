import React, { useState } from 'react';

function FileInputForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the selected file
    console.log(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="UB">
        <input type="file"  onChange={handleFileChange}/>

      </label>
      <br />
      <button type="submit" disabled={!file} className='SB'>
        Submit
      </button>
    </form>
  );
}

export default FileInputForm;