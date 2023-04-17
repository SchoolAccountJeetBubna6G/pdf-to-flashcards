import React, { useState } from "react";
import Tesseract from "tesseract.js";
import FileInput from "../Templates/FileInput";

function ImageToTextConverter() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const generateText = () => {
    Tesseract.recognize(file, "eng", { logger: (m) => console.log(m) }).then(
      ({ data: { text } }) => {
        setText(text);
      }
    );
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the selected file
    console.log(file);
    generateText();
  };
  return (
    <FileInput
      generateText={generateText}
      text={text}
      file={file}
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
    />
  );
}

export default ImageToTextConverter;
