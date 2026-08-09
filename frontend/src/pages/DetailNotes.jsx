import { useNavigate, useParams } from "react-router";
import Header from "../components/Header";
import DetailBody from "../components/DetailBody";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import { ThemeContext } from "../context/ThemeContext";

export function DetailNotes() {
  const [note, setNote] = useState({});
  const { darkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const detailNote = async () => {
      const note = await getNote(params.notesId);
      setNote(note.data);
      setLoading(false);
    };
    detailNote();
  }, [params.notesId]);

  const handleArchiveClick = async () => {
    // archiveNote(detailNote.id);
    await archiveNote(params.notesId);
    navigate({
      pathname: "/",
    });
  };

  const handleUnarchiveClick = async () => {
    // unarchiveNote(detailNote.id);
    await unarchiveNote(params.notesId);
    navigate({
      pathname: "/",
    });
  };

  const handleDeleteClick = async () => {
    // deleteNote(detailNote.id);
    await deleteNote(params.notesId);
    navigate({
      pathname: "/",
    });
  };

  return (
    <div
      className={
        darkMode
          ? "bg-[#121212] font-inter text-white min-h-screen"
          : "bg-[#FFFFFF] font-inter text-black min-h-screen"
      }
    >
      <Header />
      <DetailBody
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
        loading={loading}
      />
      <div className="fixed flex gap-4 bottom-8 right-8 ">
        {note.archived ? (
          <Button click={handleUnarchiveClick}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7V5a1 1 0 011-1h14a1 1 0 011 1v2H4zM20 7v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m7 5l1.293-1.293a1 1 0 011.414 0L15 12m-3-3v6"
            />
          </Button>
        ) : (
          <Button click={handleArchiveClick}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7H4V5a1 1 0 011-1h14a1 1 0 011 1v2zM4 7v10a2 2 0 002 2h12a2 2 0 002-2V7M9 12h6"
            />
          </Button>
        )}
        <Button click={handleDeleteClick}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-6 0V5a1 1 0 011-1h4a1 1 0 011 1v2"
          />
        </Button>
      </div>
    </div>
  );
}
