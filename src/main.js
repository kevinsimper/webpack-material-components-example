import React from "react";
import ReactDOM from "react-dom";
import Button from "@material/react-button";
import "@material/react-button/index.scss";

class MyApp extends React.Component {
  render() {
    return <Button>Click Me!</Button>;
  }
}

let root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<MyApp />, root);
