import { Search } from "../components/search/Search";
import { Series } from "../components/series/Series";
import { Navbar } from "../components/ui/Navbar";

export const SeriesPage = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Series />
    </>
  );
};
