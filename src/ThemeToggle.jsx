import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useGlobalContext } from "./Context";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext;

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <FaSun className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
