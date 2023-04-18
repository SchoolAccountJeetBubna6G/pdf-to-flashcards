import React from "react";
import ImageToTextComponent from "./components/ImageToText/ImageToTextComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import PdfToTextComponent from "./components/PdfToText/PdfToTextComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar
            title="Company name"
            pdfToTextLink="pdf/text"
            imageToTextLink="img/text"
          />
          <Routes>
            <Route
              path="/img/text"
              element={
                <ImageToTextComponent
                  title="Convert Image to text!"
                  description="Convert your .png or .jpg file to a .txt file with 3 simple clicks!"
                />
              }
            />

            <Route
              path="/pdf/text"
              element={
                <ImageToTextComponent
                  title="Convert PDF to text!"
                  description="Convert your .pdf file to a .txt file with 3 simple clicks!"
                />
              }
            />

            <Route path="/pdf/text" element={<PdfToTextComponent />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
