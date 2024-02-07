import "./Booking.css";
import BookingForm from "../Components/BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../fakeApi";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};
const initializeTimes = () => {
  return [...fetchAPI(new Date())];
};

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function submitForm(values) {
    submitAPI(values);
  }
  return (
    <>
      <div className="booking-header">
        <h2>Reserve a table</h2>
      </div>
      <div className="container booking">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </>
  );
};

export default Booking;