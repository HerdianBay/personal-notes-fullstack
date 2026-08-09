import { useContext } from "react";
import AddBody from "../components/AddBody";
import Header from "../components/Header";
import { ThemeContext } from "../context/ThemeContext";

export default function AddNotes() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={
        darkMode
          ? "bg-[#121212] font-inter text-white min-h-screen"
          : "bg-[#FFFFFF] font-inter text-black min-h-screen"
      }
    >
      <Header />
      <AddBody />
    </div>
  );
}
