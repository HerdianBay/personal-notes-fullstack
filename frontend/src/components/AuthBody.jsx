import AuthButton from "./AuthButton";

export default function AuthBody({
  title,
  textButton,
  hyperlinkText,
  formContent,
  handleClick,
}) {
  return (
    <main className="py-8 w-[90%] mx-auto max-w-[1200px]">
      <section>
        <h2 className="text-2xl font-bold leading-[120%]">{title}</h2>
        <form action="" className="my-8">
          {formContent}
          <AuthButton handleClick={handleClick}>{textButton}</AuthButton>
        </form>
        <p>{hyperlinkText}</p>
      </section>
    </main>
  );
}
