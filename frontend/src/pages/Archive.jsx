import { useImmer } from "use-immer";
import Header from "../components/Header";
import NotesList from "../components/NotesList";
import Body from "../components/Body";
import { useSearchParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { getArchivedNotes } from "../utils/network-data";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Archive() {
  const [archiveList, setArchiveList] = useImmer([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  let filteredNote = [];

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getArchivedNotes();
        setArchiveList(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
    getData();
  }, []);

  const handleOnChangeSearch = (event) => {
    setSearchParams({
      keyword: event.target.value,
    });
  };

  if (archiveList.length !== 0) {
    filteredNote = archiveList.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  return (
    <div
      className={
        darkMode
          ? "bg-[#121212] font-inter text-white min-h-screen"
          : "bg-[#FFFFFF] font-inter text-black min-h-screen"
      }
    >
      <Header />
      <Body
        onChangeSearch={handleOnChangeSearch}
        searchData={keyword}
        status={language === "id" ? "Catatan Arsip" : "Archived Notes"}
      >
        {loading && <p className="mx-auto mt-8">Loading...</p>}
        {keyword == "" ? (
          <div className="notes-list mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {archiveList.map((data, index) => (
              <NotesList
                key={index}
                id={data.id}
                title={data.title}
                createdAt={data.createdAt}
                body={data.body}
              />
            ))}
          </div>
        ) : (
          <div className="notes-list mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredNote.map((data, index) => (
              <NotesList
                key={index}
                id={data.id}
                title={data.title}
                createdAt={data.createdAt}
                body={data.body}
              />
            ))}
          </div>
        )}
        {!loading && (archiveList.length == 0 || filteredNote.length == 0) && (
          <p className="mx-auto mt-8 text-center">
            {language === "id" ? "Tidak ada catatan" : "No notes"}
          </p>
        )}
      </Body>
    </div>
  );
}
