import { useSearchParams } from "react-router-dom";

const Pagination = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePageClick = (page: number) => {
    if (page === 0) {
      searchParams.delete("page");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ page: String(page + 1) });
    }
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex flex-row -space-x-px text-sm">
        <li>
          <button
            onClick={() => handlePageClick(currentPage - 2)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center text-body bg-gray-50 border border-black text-sm w-10 h-10 focus:outline-none ${
              currentPage === 1
                ? "disabled:opacity-20"
                : "hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer"
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-4 h-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => (
          <li>
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={`flex items-center justify-center border border-black hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer text-sm w-10 h-10 focus:outline-none ${
                currentPage === index + 1
                  ? "bg-gray-800 text-gray-100"
                  : "bg-gray-50 text-body"
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => handlePageClick(currentPage)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center text-body bg-gray-50 border border-black  text-sm w-10 h-10 focus:outline-none ${
              currentPage === totalPages
                ? "disabled:opacity-20"
                : "hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer"
            }`}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-4 h-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
