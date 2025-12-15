import { useEffect, useState } from "react";
import type { Cat } from "../types/cats";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import CatList from "../components/CatList";

const Favourites = () => {
  const favs = JSON.parse(localStorage.getItem("favs") || "[]");
  const [data, setData] = useState<Cat[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchParam] = useSearchParams();
  const page = Number(searchParam.get("page")) || 1;
  const PAGE_SIZE = 12;
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_CATQUEST_API_URL
      }/cats/favourites?page=${page}&limit=${PAGE_SIZE}&ids=${
        favs.length > 0 ? favs.join(",") : null
      }`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error in fetching cat data");
        }
        return res.json();
      })
      .then((json: { totalPages: number; cats: Cat[] }) => {
        setData(json.cats);
        setTotalPages(json.totalPages);
      })
      .catch((err) => console.error(err));
  }, [page, favs]);
  return (
    <div className="flex flex-col items-center justify-center gap-8 my-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold ">Favourites Page</h1>
        <p>Here you can find your favourite cat breeds.</p>
      </div>
      {!data && <p>Loading cats...</p>}
      {data && <CatList cats={data} />}
      {data && data.length > PAGE_SIZE && (
        <Pagination currentPage={page} totalPages={totalPages} />
      )}
    </div>
  );
};

export default Favourites;
