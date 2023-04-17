import React from "react";

export default function FileInput(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="text-center">
          <input
            type="file"
            className="text-center btn btn-primary pt-3 pb-3 mt-4"
            onChange={props.handleFileChange}
          />
        </div>
        <br />
        <button type="submit" disabled={!props.file} className="SubmitButton">
          Submit
        </button>
      </form>
      <h3>{props.text}</h3>
    </div>
  );
}
