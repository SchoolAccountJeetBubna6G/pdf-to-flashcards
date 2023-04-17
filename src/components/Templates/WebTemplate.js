import React from "react";
import Steps from "../Steps";
import "/workspaces/pdf-to-flashcards/src/App.css";

export default function WebTemplate(props) {
  return (
    <div>
      <main className="mB">
        <section className="Titles">
          <b>
            <h1>{props.title}</h1>
          </b>
          <h5>{props.description}</h5>
        </section>
        <section className="UD">{props.component}</section>
      </main>
      <Steps steps={props.steps} />
    </div>
  );
}
