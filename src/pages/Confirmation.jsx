import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const { date, time, name } = location.state;
  return (
    <div className="container confirmation">
      <h2>Hi {name}, your reservation is successful!</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>A confirmation will be sent to your email.</p>
    </div>
  );
};

export default Confirmation;
