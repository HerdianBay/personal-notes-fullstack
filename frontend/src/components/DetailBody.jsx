import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

export default function DetailBody({ title, createdAt, body, loading }) {
  const formattedDate = showFormattedDate(createdAt);
  return (
    <main className="w-11/12 mx-auto max-w-[1200px] py-8">
      <section className="detail-page mt-8 mx-auto w-11/12">
        {loading ? (
          <p className="mx-auto mt-8">Loading...</p>
        ) : (
          <>
            <h3 className="text-5xl font-bold mb-2 break-all lg:text-[64px]">
              {title}
            </h3>
            <p className="text-[#c7c7c7]">{formattedDate}</p>
            <p className="mt-9 text-lg">{body}</p>
          </>
        )}
      </section>
    </main>
  );
}

DetailBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
