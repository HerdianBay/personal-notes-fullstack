import { useContext, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router";
import { addNote } from "../utils/network-data";
import { ThemeContext } from "../context/ThemeContext";
export default function AddBody() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const handleOnChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleOnChangeBody = (event) => {
    setBody(event.target.value);
  };

  const addData = async () => {
    await addNote({ title, body });
    navigate({
      pathname: "/",
    });
  };

  return (
    <main className="w-11/12 mx-auto max-w-[1200px] py-8">
      <div className="mt-8">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Catatan rahasia"
          className="text-[64px] w-full font-bold placeholder:text-[#c7c7c7]"
          value={title}
          onChange={handleOnChangeTitle}
        />
        <textarea
          type="text"
          name="body"
          id="body"
          placeholder="Sebenarnya saya adalah ...."
          className={
            darkMode
              ? "min-h-[500px] w-full text-2xl py-2 placeholder:text-white"
              : "min-h-[500px] w-full text-2xl py-2 placeholder:text-black"
          }
          value={body}
          onChange={handleOnChangeBody}
        />
      </div>
      <div className="fixed bottom-8 right-8">
        <Button click={addData}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </Button>
      </div>
    </main>
  );
}
