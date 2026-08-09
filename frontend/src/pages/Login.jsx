import { Link, useNavigate } from "react-router";
import AuthBody from "../components/AuthBody";
import AuthHeader from "../components/AuthHeader";
import InputForm from "../components/InputForm";
import { login, putAccessToken } from "../utils/network-data";
import { useImmer } from "use-immer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Login() {
  const [form, setForm] = useImmer({
    Email: "",
    Password: "",
  });
  const { darkMode } = useContext(ThemeContext);
  const { refreshUser } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((draft) => {
      draft[name] = value;
    });
  };

  const handleClickLogin = async (e) => {
    e.preventDefault();
    const accessToken = await login({
      email: form.Email,
      password: form.Password,
    });
    if (accessToken !== null) {
      putAccessToken(accessToken.data.accessToken);
      await refreshUser();
      navigate({
        pathname: "/",
      });
    }
  };

  const titleText =
    language === "id"
      ? "Yuk, login untuk menggunakan aplikasi."
      : "Login to use app, please";
  const textButton = "Login";
  const hyperlinkText =
    language === "id" ? (
      <>
        Belum punya akun?{" "}
        <Link to="/register" className="underline">
          Daftar di sini
        </Link>
      </>
    ) : (
      <>
        Don't have an account?{" "}
        <Link to="/register" className="underline">
          Register here
        </Link>
      </>
    );
  const formContent = (
    <>
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
        handleClick={handleClickLogin}
      />
    </div>
  );
}
