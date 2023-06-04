import * as React from "react";
import { Fragment } from "react";
import AppRouter from "./components/routes/AppRouter";
import { GlobalStyle } from "./globals/global.styles";

function App() {
  return (
    <>
      <Fragment>
        <GlobalStyle />
          <AppRouter />
      </Fragment>
    </>
  );
}

export default App;
