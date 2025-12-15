import PawIcon from "./pawIcon";

const CatAttributePaw = ({
  label,
  value,
}: {
  label: string;
  value: number;
}) => {
  return (
    <>
      <span>{label}</span>
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, index) => (
          <PawIcon key={index} filled={index < value} size={20} />
        ))}
      </div>
    </>
  );
};
export default CatAttributePaw;
