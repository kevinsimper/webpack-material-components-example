# Webpack Material.io example

I wanted to make a quick demo of how to setup webpack and material.io together.

I first tried setting it up with Parcel.js but the out-of-box no-config did not
work with Material.io Sass. It did work with the CSS output, but that is not
ideal if you want to easily change some of the Sass variables.

This demo uses the `@material/react-button` which is a React wrapper around the
material.io components which looks like a super stable UI kit.

https://github.com/material-components/material-components-web-react

https://material.io/develop/web/

```
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
```
