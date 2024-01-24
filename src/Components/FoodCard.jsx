const FoodCard = (props) => {
  return (
    <section className="card-food">
      <img src={props.img} className="food--image" alt="food"/>
      <p className="food--name">{props.foodname}</p>
      <p className="food--price">{props.price}</p>
      <p className="food--detail">{props.description}</p>
    </section>
  );
};

export default FoodCard;
