import { Dispatch, FormEvent, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "../title/Title";
import { Icon } from "../Icon";

import authStyle from "../../sass/Auth/auth.module.scss";
import { AuthButton } from "../Buttons/auth/AuthButton";

interface AuthProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
}
export const Auth = ({ isLogin, setIsLogin }: AuthProps) => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get the user or the info an redirect to the movies home
    navigate("/home-movies");
  };
  return (
    <>
      <Icon name="red_movie" className={authStyle["auth__icon__movie"]} />
      <section className={authStyle["auth"]}>
        {!isLogin ? (
          <Title
            level="h1"
            text="Sign Up"
            className={authStyle["auth__title"]}
          />
        ) : (
          <Title level="h1" text="Login" className={authStyle["auth__title"]} />
        )}
        <form className={`${authStyle["auth__form"]}`} onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <input
                type="text"
                placeholder="Email address"
                className={authStyle["auth__input"]}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className={authStyle["auth__input"]}
                required
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Email address"
                className={authStyle["auth__input"]}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className={authStyle["auth__input"]}
                required
              />
              <input
                type="password"
                placeholder="Repeat Password"
                className={authStyle["auth__input"]}
                required
              />
            </>
          )}
          {isLogin ? (
            <AuthButton text={"Login to your account"} />
          ) : (
            <AuthButton text={"Create an account"} />
          )}
        </form>

        {isLogin ? (
          <span className={`${authStyle["auth__account"]}`}>
            Don’t have an account?
            <span
              className={`${authStyle["auth__account__auth"]}`}
              onClick={() => setIsLogin((e) => !e)}
            >
              Sign Up
            </span>
          </span>
        ) : (
          <span className={`${authStyle["auth__account"]}`}>
            Alread have an account?
            <span
              className={`${authStyle["auth__account__auth"]}`}
              onClick={() => setIsLogin((e) => !e)}
            >
              Login
            </span>
          </span>
        )}
      </section>
    </>
  );
};
