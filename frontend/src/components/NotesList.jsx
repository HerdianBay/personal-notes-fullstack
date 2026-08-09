import { useNavigate } from "react-router";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

export default function NotesList({ id, title, createdAt, body }) {
  const navigate = useNavigate();
  const formattedDate = showFormattedDate(createdAt);

  function handleClick() {
    navigate({
      pathname: `/notes/${id}`,
    });
  }

  return (
    <div className="border rounded-md border-t-5 p-4">
      <h3
        className="text-[21px] font-bold underline hover:cursor-pointer"
        onClick={handleClick}
      >
        {title}
      </h3>
      <p className="text-sm text-[#c7c7c7]">{formattedDate}</p>
      <p className="mt-4 line-clamp-6">{body}</p>
    </div>
  );
}

NotesList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
