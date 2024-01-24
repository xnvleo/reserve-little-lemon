import "./Home.css";
import { Link } from "react-router-dom";
import FoodCard from "../Components/FoodCard";
import TestimonyCard from "../Components/TestimonyCard";
import data_food from "../data_food";
import data_review from "../data_review";

const Home = () => {
  const foodCard = data_food.map((item) => {
    return <FoodCard key={item.id} {...item} />;
  });

  // const reviewCard = data_review.map((item) => {
  //   return <TestimonyCard key={item.id} {...item} />;
  // });

  const reviewData = data_review;

  return (
    <main>
      <section className="home-hero">
        <div className="container">
          <div className="hero--text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We care a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="booking" className="btn-link">
              Reserve a table
            </Link>
          </div>
        </div>
      </section>

      <section className="home-specials">
        <div className="container">
          <div className="specials--header">
            <h4>This week specials!</h4>
            <Link to="order" className="btn-link">
              Order Online
            </Link>
          </div>
          <div className="card-foodList">{foodCard}</div>
        </div>
      </section>

      <section className="home-testimony">
        <div className="container">
          <TestimonyCard reviewData={reviewData} />
        </div>
      </section>

      <section className="home-intro">
        <div className="container">
          <h2>About Little Lemon</h2>
          <h4>Mario and Adrean </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
