import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function InputSearch({ onChangeSearch, searchData }) {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder={
        language === "id" ? "Cari berdasarkan judul ..." : "Search by title ..."
      }
      value={searchData}
      onChange={onChangeSearch}
      className={
        darkMode
          ? "w-full border rounded-sm p-2 text-sm my-4 placeholder:text-white"
          : "w-full border rounded-sm p-2 text-sm my-4 placeholder:text-black"
      }
    />
  );
}

InputSearch.propTypes = {
  onChangeSearch: PropTypes.func.isRequired,
  searchData: PropTypes.string.isRequired,
};
