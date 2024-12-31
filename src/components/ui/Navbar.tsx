import { NavLink } from "react-router-dom";

import navbarStyles from "../../sass/ui/navbar.module.scss";
import { Icon } from "../Icon";

export const Navbar = () => {
  return (
    <nav className={`${navbarStyles["navbar"]}`}>
      <NavLink to="/home-movies">
        <Icon name="red_movie" className={`${navbarStyles["navbar__icon"]}`} />
      </NavLink>
      <div className={`${navbarStyles["navbar__wrapperIcons"]}`}>
        <NavLink
          to={"/home-movies"}
          className={({ isActive }) =>
            [
              isActive ? `${navbarStyles["navbar__icon__nav--active"]}` : ``,
            ].join(" ")
          }
        >
          <Icon
            name="home"
            className={`${navbarStyles["navbar__icon"]} ${navbarStyles["navbar__icon__nav"]} `}
          />
        </NavLink>
        <NavLink
          to={"/movies"}
          className={({ isActive }) =>
            [
              isActive ? `${navbarStyles["navbar__icon__nav--active"]}` : ``,
            ].join(" ")
          }
        >
          <Icon
            name="movie"
            className={`${navbarStyles["navbar__icon"]} ${navbarStyles["navbar__icon__nav"]}`}
          />
        </NavLink>
        <NavLink
          to={"/series"}
          className={({ isActive }) =>
            [
              isActive ? `${navbarStyles["navbar__icon__nav--active"]}` : ``,
            ].join(" ")
          }
        >
          <Icon
            name="tv_series"
            className={`${navbarStyles["navbar__icon"]} ${navbarStyles["navbar__icon__nav"]}`}
          />
        </NavLink>
        <NavLink
          to={"/bookmark"}
          className={({ isActive }) =>
            [
              isActive ? `${navbarStyles["navbar__icon__nav--active"]}` : ``,
            ].join(" ")
          }
        >
          <Icon
            name="book_movie_page"
            className={`${navbarStyles["navbar__icon"]} ${navbarStyles["navbar__icon__nav"]}`}
          />
        </NavLink>
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
