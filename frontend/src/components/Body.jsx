import InputSearch from "../components/InputSearch";
import PropTypes from "prop-types";

export default function Body({ children, onChangeSearch, searchData, status }) {
  return (
    <main className="w-11/12 mx-auto max-w-[1200px] py-8">
      <section className="homepage">
        <h2 className="text-2xl font-bold">{`${status}`}</h2>
        <InputSearch onChangeSearch={onChangeSearch} searchData={searchData} />
        {children}
      </section>
    </main>
  );
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  searchData: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
