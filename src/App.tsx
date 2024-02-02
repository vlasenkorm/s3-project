import React from "react";
import { createGlobalStyle } from 'styled-components'
import Node from "./Node";
import Slider from "./component/slider/main"


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle/>
    </div>
  );
};
export default App;
