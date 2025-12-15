import { useState } from "react";
import HeartIcon from "./HeartIcon";
import CatAttributePaw from "./CatAttributePaw";
import { Link } from "react-router-dom";

const CatCard = ({
  image,
  name,
  weight,
  lifeSpan,
  socialNeeds,
  activity,
  familyFriendly,
  dogFriendly,
  strangerFriendly,
  intelligence,
  playfulness,
  id,
}: {
  image: string;
  name: string;
  id: string;
  weight: string;
  lifeSpan: string;
  socialNeeds: number;
  activity: number;
  familyFriendly: number;
  dogFriendly: number;
  strangerFriendly: number;
  intelligence: number;
  playfulness: number;
}) => {
  const favs = JSON.parse(localStorage.getItem("favs") || "[]");
  const [isFav, setIsFav] = useState(favs.includes(id));

  const handleFavouriteClick = () => {
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");

    if (!isFav) {
      favs.push(id);
      localStorage.setItem("favs", JSON.stringify(favs));
      setIsFav(true);
    } else {
      const index = favs.indexOf(id);
      favs.splice(index, 1);
      localStorage.setItem("favs", JSON.stringify(favs));
      setIsFav(false);
    }
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <img
        className="w-full h-60 object-cover"
        src={image}
        alt={"picture of " + name + " cat"}
      />
      <div className="px-6 py-4 text-left gap-2 flex flex-col">
        <div className="flex flex-row mb-2 justify-between">
          <p className="font-bold text-xl">{name}</p>
          <div
            className="p-2 bg-black rounded-full hover:cursor-pointer hover:bg-gray-800"
            onClick={handleFavouriteClick}
          >
            <HeartIcon stroke="#FFFFFF" filled={isFav} size={16} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span>Weight</span>
          <span>{weight} kg</span>
          <span>Life Span</span>
          <span>{lifeSpan} years</span>
          <CatAttributePaw label="Social Needs" value={socialNeeds} />
          <CatAttributePaw label="Family Friendly" value={familyFriendly} />
          <CatAttributePaw label="Dog Friendly" value={dogFriendly} />
          <CatAttributePaw label="Stranger Friendly" value={strangerFriendly} />
          <CatAttributePaw label="Activity" value={activity} />
          <CatAttributePaw label="Intelligence" value={intelligence} />
          <CatAttributePaw label="Playfulness" value={playfulness} />
        </div>
        <Link to={{ pathname: `/cats/${id}` }}>
          <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 w-full hover:cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CatCard;
