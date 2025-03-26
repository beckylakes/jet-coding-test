import Card from "./Card";

const Collection = ({restaurants}) => {

  return (
    <ul>
      {restaurants.slice(0, 10).map((restaurant) => {
        return (
          <li key={restaurant?.id}>
            <Card restaurant={restaurant}/>
          </li>
        )
      })}
    </ul>
  )
};

export default Collection;
