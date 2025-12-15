import type { Cat } from "../types/cats";
import CatCard from "./CatCard";

const CatList = ({ cats }: { cats: Cat[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          id={cat.id}
          image={cat.image}
          name={cat.name}
          weight={cat.weight}
          lifeSpan={cat.life_span}
          socialNeeds={cat.social_needs}
          activity={cat.activity_level}
          familyFriendly={cat.child_friendly}
          dogFriendly={cat.dog_friendly}
          strangerFriendly={cat.stranger_friendly}
          intelligence={cat.intelligence}
          playfulness={cat.playfulness}
        />
      ))}
    </div>
  );
};

export default CatList;
