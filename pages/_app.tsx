import React, { StrictMode } from "react";
import { NextPage } from "next";
import "~/styles.css";
import { Provider } from "react-redux";
import { store } from "~/store";

const App: NextPage<any> = ({ Component, pageProps }) => (
  <StrictMode>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </StrictMode>
);
export default App;
