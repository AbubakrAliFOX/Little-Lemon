import "./style.css";

export default function Item() {
  return (
    <div className="item">
      <img
        className="item-img"
        src="https://res.cloudinary.com/dewpck9nt/image/upload/v1701674769/LittleLemon/mdkkatumak7gwashvfhs.webp"
        alt="Order Image"
      />
      <h3 className="item-name">Stuffed Vine Leaves</h3>
      <p className="item-amount">4 pcs</p>
    </div>
  );
}
