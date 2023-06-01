import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./context/Context";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Auth0Provider
    domain="dev-rsoud0urz7ikuyl6.us.auth0.com"
    clientId="HeVeMh9qcM1zzWdA9rBLK4QNwcwiUy4M"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Context>
      <App />
    </Context>
  </Auth0Provider>,
  document.getElementById("root")
);
