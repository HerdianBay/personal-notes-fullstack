import Header from "../components/Header";

export default function Error() {
  return (
    <div className="bg-[#121212] font-inter text-white min-h-screen">
      <Header />
      <div className="error-body w-11/12 mx-auto max-w-[1200px] py-8">
        <h2 className="text-2xl font-bold">404</h2>
        <p>Page not found</p>
      </div>
    </div>
  );
}
