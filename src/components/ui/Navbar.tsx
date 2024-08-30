import { useNavigate } from "react-router-dom";
import navbarStyles from "../../sass/ui/navbar.module.scss";
import { Icon } from "../Icon";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={`${navbarStyles["navbar"]}`}>
      <Icon
        name="red_movie"
        className={`${navbarStyles["navbar__icon"]}`}
        onClick={() => {
          navigate("/home-movies");
        }}
      />
      <div className={`${navbarStyles["navbar__wrapperIcons"]}`}>
        <Icon
          name="home"
          className={`${navbarStyles["navbar__icon"]} ${navbarStyles["navbar__icon__nav"]} ${navbarStyles["navbar__icon__nav--active"]}`}
        />
        <Icon
          name="movie"
          className={`${navbarStyles["navbar__icon"]} ${navbarStyles["navbar__icon__nav"]}`}
        />
        <Icon
          name="tv_series"
          className={`${navbarStyles["navbar__icon"]} ${navbarStyles["navbar__icon__nav"]}`}
        />
        <Icon
          name="book_movie"
          className={`${navbarStyles["navbar__icon"]} ${navbarStyles["navbar__icon__nav"]}`}
        />
      </div>
      <div>
        <img
          src="/assets/person.png"
          alt="person"
          className={`${navbarStyles["navbar__image"]}`}
          width={24}
          height={24}
        />
      </div>
    </nav>
  );
};
