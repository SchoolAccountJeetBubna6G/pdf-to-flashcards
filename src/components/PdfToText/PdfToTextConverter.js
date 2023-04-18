import React, { useState } from "react";
import FileInput from "../Templates/FileInput";

export default function PdfToTextConverter() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const generateText = () => {
    var convertapi = require("convertapi")("nFVFHoiunsHOOpg2");
    convertapi
      .convert("pdf", { File: "/path/to/my_file.docx" })
      .then(function (result) {
        // get converted file url
        console.log("Converted file url: " + result.file.url);
      })
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
