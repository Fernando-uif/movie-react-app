import type { TitleProps } from "../../interfaces/title/title.interface";
import titleStyle from "../../sass/title/title.module.scss";

export const Title = ({ level, text, className }: TitleProps) => {
  return (
    <>
      {level === "h1" ? (
        <h1 className={`${titleStyle["title"]} ${className ? className : ""}`}>
          {text}
        </h1>
      ) : (
        <h2 className={`${titleStyle["subTitle"]} ${className ? className : ""}`}>
          {text}
        </h2>
      )}
    </>
  );
};
