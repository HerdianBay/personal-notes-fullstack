import { Link, useNavigate } from "react-router";
import AuthBody from "../components/AuthBody";
import AuthHeader from "../components/AuthHeader";
import InputForm from "../components/InputForm";
import { useImmer } from "use-immer";
import { register } from "../utils/network-data";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Register() {
  const [form, setForm] = useImmer({
    Name: "",
    Email: "",
    Password: "",
  });
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((draft) => {
      draft[name] = value;
    });
  };

  const handleClickRegister = async (e) => {
    e.preventDefault();
    await register({
      name: form.Name,
      email: form.Email,
      password: form.Password,
    });
    navigate({
      pathname: "/login",
    });
  };

  const titleText =
    language === "id"
      ? "Isi form untuk mendaftar akun."
      : "Fill the form to register account";
  const textButton = "Register";
  const hyperlinkText =
    language === "id" ? (
      <>
        Sudah punya akun?{" "}
        <Link to="/login" className="underline">
          Login di sini
        </Link>
      </>
    ) : (
      <>
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login here
        </Link>
      </>
    );
  const formContent = (
    <>
      <InputForm
        formName={"Name"}
        type={"name"}
        value={form.Name}
        handleChange={handleChangeInput}
      />
      <InputForm
        formName={"Email"}
        type={"email"}
        value={form.Email}
        handleChange={handleChangeInput}
      />
      <InputForm
        formName={"Password"}
        type={"password"}
        value={form.Password}
        handleChange={handleChangeInput}
      />
    </>
  );
  return (
    <div
      className={
        darkMode
          ? "bg-[#121212] font-inter text-white min-h-screen"
          : "bg-[#FFFFFF] font-inter text-black min-h-screen"
      }
    >
      <AuthHeader />
      <AuthBody
        title={titleText}
        textButton={textButton}
        hyperlinkText={hyperlinkText}
        formContent={formContent}
        handleClick={handleClickRegister}
      />
    </div>
  );
}
