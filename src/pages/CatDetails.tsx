import { useEffect, useState } from "react";
import type { Cat } from "../types/cats";
import { useParams } from "react-router-dom";
import CatAttributePaw from "../components/CatAttributePaw";
import HeartIcon from "../components/HeartIcon";

const CatDetails = () => {
  const { id } = useParams();
  const favs = JSON.parse(localStorage.getItem("favs") || "[]");
  const [data, setData] = useState<Cat | null>(null);
  const [isFav, setIsFav] = useState(favs.includes(id));
  useEffect(() => {
    fetch(`${import.meta.env.VITE_CATQUEST_API_URL}/cats/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error in fetching cat data");
        }
        return res.json();
      })
      .then((json: { informations: Cat }) => {
        setData(json.informations);
      })
      .catch((err) => console.error(err));
  }, [id, favs]);
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
    <div className="flex flex-col items-center justify-center gap-8 my-4">
      {!data && <p>Loading cat informations...</p>}
      {data && (
        <div className="flex flex-row gap-4">
          <h1 className="text-4xl font-bold">{data?.name}</h1>{" "}
          <div
            className="p-2 bg-black rounded-full hover:cursor-pointer hover:bg-gray-800"
            onClick={handleFavouriteClick}
          >
            <HeartIcon stroke="#FFFFFF" filled={isFav} size={24} />
          </div>
        </div>
      )}
      {data && (
        <div className="grid grid-cols-2 gap-8">
          <img
            className="w-full aspect-4/3 rounded-2xl object-cover"
            src={data.image}
            alt={"picture of " + data.name + " cat"}
          />
          <div className="flex flex-col gap-4 text-lg text-left">
            <p>{data.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <span>Weight</span>
              <span>{data.weight} kg</span>
              <span>Life Span</span>
              <span>{data.life_span} years</span>
              <CatAttributePaw label="Social Needs" value={data.social_needs} />
              <CatAttributePaw
                label="Family Friendly"
                value={data.child_friendly}
              />
              <CatAttributePaw label="Dog Friendly" value={data.dog_friendly} />
              <CatAttributePaw
                label="Stranger Friendly"
                value={data.stranger_friendly}
              />
              <span>Indoors only</span>
              <span>{data.indoors === 1 ? "Yes" : "No"}</span>
              <span>Temperament</span>
              {data.temperament}

              <span>Grooming </span>
              <span>{data.grooming < 1 ? "Suggested" : "Not necessary"}</span>
              <CatAttributePaw label="Activity" value={data.activity_level} />
              <CatAttributePaw label="Intelligence" value={data.intelligence} />
              <CatAttributePaw label="Playfulness" value={data.playfulness} />
              <CatAttributePaw label="Vocalisation" value={data.vocalisation} />
              <CatAttributePaw
                label="Shedding Level"
                value={data.shedding_level}
              />
              <span>Health Issues</span>
              <span>
                {data.health_issues <= 2
                  ? "Low"
                  : data.health_issues <= 4
                  ? "Medium"
                  : "High"}
              </span>
              <span>Hairless</span>
              <span>{data.hairless < 1 ? "No" : "Yes"}</span>
              <span>Rare</span>
              <span>{data.rare < 1 ? "No" : "Yes"}</span>
              <span>Hyperallergenic</span>
              <span>{data.hypoallergenic < 1 ? "No" : "Yes"}</span>
            </div>
            {data.wikipedia_url && (
              <span>
                Wikipedia{" "}
                <a
                  href={data.wikipedia_url}
                  target="_blank"
                  rel="noopener noreferrer "
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  Link
                </a>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CatDetails;
