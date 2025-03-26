import Card from "./Card";

const Collection = ({ restaurants }) => {
  return (
    <div className="flex flex-col items-center px-7">
      <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {restaurants.slice(0, 10).map((restaurant) => {
          return (
            <li key={restaurant?.id} className="flex justify-center w-full">
              <Card restaurant={restaurant} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Collection;
