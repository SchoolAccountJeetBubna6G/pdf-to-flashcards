import React from "react";
import ImageToTextConverter from "./ImageToTextConverter";
import WebTemplate from "../Templates/WebTemplate";

export default function ImageToTextComponent(props) {
  return (
    <WebTemplate
      title={props.title}
      description={props.description}
      component={<ImageToTextConverter />}
      steps={props.steps}
    />
  );
}
