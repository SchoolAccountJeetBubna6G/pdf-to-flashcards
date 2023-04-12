import FileInputForm from "./components/FileInputForm";
import Navbar from "./components/Navbar";
import "./App.css";
import StepHTML from "./components/Steps";
function App() {
  return (
    <>
      <Navbar title="Pdf to questions" />
      <main className="mB">
        <section className="Titles">
          <b><h1>Upload your PDF</h1></b>
          <h5>Convert your text book to questions!</h5>
        </section>
        <section className="UD">
          <FileInputForm />
        </section>
      </main>
      <StepHTML/> {/*I am still working on this as of 11th of april 2023 Ima puah it anyway*/}
    </>
  );
}

export default App;
