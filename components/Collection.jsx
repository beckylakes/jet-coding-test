import Card from "./Card";

const Collection = ({restaurants}) => {

  return (
    <ul>
      {restaurants.map((restaurant) => {
        return (
          <li id={restaurant?.id}>
            <Card restaurant={restaurant}/>
          </li>
        )
      })}
    </ul>
  )
};

export default Collection;
