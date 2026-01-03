import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MantineProvider, createTheme } from "@mantine/core";
import { store } from "./store";
import App from "./App";

const theme = createTheme({


  /* Настройки темы по желанию */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <App />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
