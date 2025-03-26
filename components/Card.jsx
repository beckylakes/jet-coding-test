import Image from "next/image";

const Card = ({ restaurant }) => {
  const { name, address, cuisines, rating, logoUrl } = restaurant;

  return (
    <div className="group relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      <div className="relative w-full h-[180px] bg-gray-200">
        <Image
          src={logoUrl}
          alt="Tasty food"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-bold truncate flex-1 text-black">
          {name}
        </h2>
        <div className="flex justify-between text-gray-700 text-sm">
          <p>{rating.starRating} ⭐</p>
          <p>
            {cuisines.slice(0, 2).map((cuisine) => cuisine.name).join(", ")}
          </p>
        </div>
        <p className="text-gray-600 text-sm truncate">{address.firstLine}, {address.city}</p>
      </div>
    </div>
  );
};

export default Card;
