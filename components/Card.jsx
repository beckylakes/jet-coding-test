import Image from "next/image";

const Card = ({ restaurant }) => {
  const { name, address, cuisines, rating, logoUrl } = restaurant;

  return (
    <div className="group relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:translate-0.5 hover:cursor-pointer">
      <div className="w-full h-full absolute bottom-0 right-0 translate-x-full translate-y-full bg-orange-600 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 rounded-tl-[100px] opacity-10"></div>
      <div className="relative w-full h-[180px] bg-gray-200">
        <Image
          src={logoUrl}
          alt={`Logo for ${name}`}
          fill
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 relative z-10">
        <h2 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-800">
          {name}
        </h2>
        <div className="flex justify-between text-gray-700 text-sm">
          <p className="transition-colors duration-300 group-hover:text-orange-700">
            {rating.starRating} ⭐
          </p>
          <p className="transition-colors duration-300 group-hover:text-orange-700">
            {cuisines
              .slice(0, 2)
              .map((cuisine) => cuisine.name)
              .join(", ")}
          </p>
        </div>
        <p className="text-gray-600 text-sm truncate transition-colors duration-300 group-hover:text-orange-700">
          {address.firstLine}, {address.city}
        </p>
      </div>
    </div>
  );
};

export default Card;
