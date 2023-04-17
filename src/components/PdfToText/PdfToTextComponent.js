import React from "react";
import WebTemplate from "../Templates/WebTemplate";
import PdfToTextConverter from "./PdfToTextConverter";

export default function PdfToTextComponent(props) {
  return (
    <div>
      <WebTemplate
        title={props.title}
        description={props.description}
        component={<PdfToTextConverter />}
        steps={props.steps}
      />
    </div>
  );
}
