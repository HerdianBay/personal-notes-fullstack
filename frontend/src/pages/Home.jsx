import Header from "../components/Header";
import NotesList from "../components/NotesList";
import Body from "../components/Body";
import Button from "../components/Button";
import { useNavigate, useSearchParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { getActiveNotes } from "../utils/network-data";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

function Home() {
  const [activeList, setActiveList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const keyword = searchParams.get("keyword") || "";
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  let filteredNote = [];

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const activeData = await getActiveNotes();
        setActiveList(activeData.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
    getData();
  }, []);

  const handleAddClick = () => {
    navigate({
      pathname: "/notes/new",
    });
  };

  const handleOnChangeSearch = (event) => {
    setSearchParams({
      keyword: event.target.value,
    });
  };

  if (activeList.length !== 0) {
    filteredNote = activeList.filter((note) =>
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
        status={language === "id" ? "Catatan Aktif" : "Active Note"}
      >
        {loading && <p className="mx-auto mt-8">Loading...</p>}
        {keyword == "" ? (
          <div className="notes-list mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {activeList.map((data, index) => (
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
        {!loading && (activeList.length == 0 || filteredNote.length == 0) && (
          <p className="mx-auto mt-8 text-center">
            {language === "id" ? "Tidak ada catatan" : "No notes"}
          </p>
        )}
      </Body>
      <div className="fixed bottom-8 right-8">
        <Button click={handleAddClick}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </Button>
      </div>
    </div>
  );
}

export default Home;
