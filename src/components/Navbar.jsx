import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  const { isLightTheme, light, dark, toggleTheme } = themeContext;
  const { toggleAuth, isAuthenticated } = authContext;
  const themeStyles = isLightTheme ? light : dark;

  console.log(themeStyles);

  const auth = isAuthenticated ? "Log out" : "Log in";

  return (
    <nav style={{ background: themeStyles.ui, color: themeStyles.text }}>
      <span style={{ cursor: "pointer", float: "left" }} onClick={toggleAuth}>
        {auth}
      </span>

      <span onClick={toggleTheme} style={{ cursor: "pointer", float: "right" }}>
        {isLightTheme ? "Dark Mode 🌚" : "Light Mode 🌝"}
      </span>
      <h1>Context App</h1>

      <br />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
