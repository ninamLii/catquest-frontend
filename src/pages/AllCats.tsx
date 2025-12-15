import { useEffect, useState } from "react";
import CatList from "../components/CatList";
import type { Cat } from "../types/cats";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";

const AllCats = () => {
  const [data, setData] = useState<Cat[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchParam] = useSearchParams();
  const page = Number(searchParam.get("page")) || 1;
  const PAGE_SIZE = 12;

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_CATQUEST_API_URL
      }/cats?page=${page}&limit=${PAGE_SIZE}`
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
  }, [page]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 my-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold ">All Cats Page</h1>
        <p>Here you can find a list of all cat breeds.</p>
      </div>
      {!data && <p>Loading cats...</p>}
      {data && <CatList cats={data} />}
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
};

export default AllCats;
