import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { Amplify } from "aws-amplify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "eu-central-1_AIm0fLEOa",
      userPoolClientId: "46u4agi7raecvovvrdegl0db3p",
      identityPoolId: "eu-central-1:be6b79a3-4a2d-4894-b71f-13e6ba90d4c2",
      allowGuestAccess: true,
      signUpVerificationMethod: "link",
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
