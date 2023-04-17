import React from "react";
import FileInput from "../Templates/FileInput";

export default function PdfToTextConverter() {

  const generateText = () => {

  }

  return (
    <div>
      <FileInput
        generateText = {generateText}
      />
    </div>
  );
}
