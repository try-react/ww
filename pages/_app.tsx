import React, { StrictMode } from "react";
import { NextPage } from "next";
import "~/styles.css";

const App: NextPage<any> = ({ Component, pageProps }) => (
  <StrictMode>
    <Component {...pageProps} />
  </StrictMode>
);
export default App;
