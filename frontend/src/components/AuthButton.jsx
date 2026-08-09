import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function AuthButton({ children, handleClick }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <button
      className={
        darkMode
          ? "w-full bg-white text-black rounded-lg text-2xl font-bold p-3 hover:cursor-pointer"
          : "w-full bg-black text-white rounded-lg text-2xl font-bold p-3 hover:cursor-pointer"
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
