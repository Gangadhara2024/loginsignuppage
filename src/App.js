import { createContext, useRef, useState } from "react";
import "./auth.scss";
import Auth from "./loginpage/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./loginpage/Signup";
import Login from "./loginpage/Login";
import { Navbar } from "./loginpage/Navbar";

export const appContext = createContext();

const App = () => {
  const authref = useRef(new Auth());
  const [theme, setTheme] = useState("light");

  const iconcolor = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const form = theme === "dark" ? "dark-container" : "";

  return (
    <>
      <div>
        <appContext.Provider value={{ theme, iconcolor }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                path="signup"
                element={
                  <div className={form}>
                    <Signup auth={authref.current} />
                  </div>
                }
              />
              <Route
                path="login"
                element={
                  <div className={form}>
                    <Login auth={authref.current} />
                  </div>
                }
              />
            </Routes>
          </BrowserRouter>
        </appContext.Provider>
      </div>
    </>
  );
};

export default App;
