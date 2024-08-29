import { AuthButtonProps } from "../../../interfaces/auth/buttons/AuthButton.interface";
import authButtonStyle from "../../../sass/buttons/Auth.module.scss";

export const AuthButton = ({ text, className }: AuthButtonProps) => {
  return (
    <button
      className={`${authButtonStyle["authButton"]} ${
        className ? className : ""
      }`}
    >
      {text}
    </button>
  );
};
