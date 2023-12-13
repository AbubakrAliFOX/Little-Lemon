import './style.css';

export default function DishImage({imgUrl}) {
  return <img className="dish-image" src={imgUrl} alt="Dish Image" />;
}
