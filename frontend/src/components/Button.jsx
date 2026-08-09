import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ children, click }) {
  const { darkMode } = useContext(ThemeContext);
  const iconColor = darkMode ? "black" : "white";

  return (
    <button
      className={
        darkMode
          ? "bg-white rounded-full p-2 hover:cursor-pointer"
          : "bg-black rounded-full p-2 hover:cursor-pointer"
      }
      onClick={click}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke={iconColor}
      >
        {children}
      </svg>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired,
};
