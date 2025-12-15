import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [activePath, setActivePath] = useState(window.location.pathname);
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <Link to={{ pathname: "/" }} className="text-2xl font-bold">
        Cat Quest
      </Link>
      <div className="flex gap-2">
        <Link
          to={{ pathname: "/overview" }}
          onClick={() => {
            setActivePath("/overview");
          }}
          className={`hover:underline ${
            activePath === "/overview" ? "underline" : ""
          }`}
        >
          All Cats
        </Link>
        <Link
          to={{ pathname: "/favourites" }}
          onClick={() => {
            setActivePath("/favourites");
          }}
          className={`hover:underline ${
            activePath === "/favourites" ? "underline" : ""
          }`}
        >
          Favourites
        </Link>
        <Link
          to={{ pathname: "/catquest" }}
          onClick={() => {
            setActivePath("/catquest");
          }}
          className={`hover:underline ${
            activePath === "/catquest" ? "underline" : ""
          }`}
        >
          Cat Quest
        </Link>
      </div>
    </header>
  );
}

export default Header;
