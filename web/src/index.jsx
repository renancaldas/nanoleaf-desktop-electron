import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Material UI
import { ThemeProvider } from "@material-ui/styles";
import cyan from "@material-ui/core/colors/cyan";

import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: cyan,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
