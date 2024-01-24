const TestimonyCard = ({ reviewData }) => {
  return (
    // <section className="cards">
    //    <p>{props.customername}</p>
    //   <p>rating: {props.rating}</p>
    //   <p>"{props.review}" </p>
    // </section>
    <section className="card-testimony">
      {reviewData.map((item) => (
        <div key={item.id} className="testimony--card">
          <img src={item.img}  className="customerImg" alt="customer"/>
          <p className="customerName">
            {item.customername}
            </p>
          <p className="rating">
            rating: {item.rating}
            </p>
          <p className="review">
            {item.review}
            </p>
        </div>
      ))}
    </section>
  );
};

export default TestimonyCard;
