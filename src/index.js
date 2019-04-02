import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import { UserProvider, UserConsumer } from "./UserContext";
import { EmailProvider } from "./EmailContext";
import "./index.css";

function Root() {
  return (
    <UserProvider>
      <EmailProvider>
        <UserConsumer>
          {({ user }) => (user ? <MainPage /> : <LoginPage />)}
        </UserConsumer>
      </EmailProvider>
    </UserProvider>
  );
}

ReactDOM.render(<Root />, document.querySelector("#root"));
