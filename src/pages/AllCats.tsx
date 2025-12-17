import { useEffect, useState } from "react";
import CatList from "../components/CatList";
import type { Cat } from "../types/cats";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import { CAT_FILTERS } from "../helpers/filter";
import Filter from "../components/Filter";
export type FilterState = Record<string, string | number | boolean>;
const AllCats = () => {
  // state for filters
  const [filters, setFilters] = useState<FilterState>(() =>
    Object.fromEntries(
      CAT_FILTERS.map((f) => [f.key, f.type === "checkbox" ? false : ""])
    )
  );
  const [data, setData] = useState<Cat[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchParam] = useSearchParams();
  const page = Number(searchParam.get("page")) || 1;
  const PAGE_SIZE = 12;

  useEffect(() => {
    // build query params
    const params = new URLSearchParams({
      page: String(page),
      limit: String(PAGE_SIZE),
      ...Object.fromEntries(
        Object.entries(filters).filter(
          ([, value]) => value !== "" && value !== false && value !== 0
        )
      ),
    });
    // fetch cat data with filters and pagination
    fetch(`${import.meta.env.VITE_CATQUEST_API_URL}/cats?${params.toString()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error in fetching cat data");
        }
        return res.json();
      })
      .then((json: { totalPages: number; cats: Cat[] }) => {
        // update state with fetched data
        setData(json.cats);
        setTotalPages(json.totalPages);
      })
      .catch((err) => console.error(err));
  }, [page, filters]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 my-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold ">All Cats Page</h1>
        <p>Here you can find a list of all cat breeds.</p>
      </div>
      {!data && <p>Loading cats...</p>}
      {data && (
        <Filter filters={filters} config={CAT_FILTERS} onChange={setFilters} />
      )}
      {data && <CatList cats={data} />}
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
};

export default AllCats;
