import "./Booking.css";
import Myform from "../Components/BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../fakeApi";

const Booking = () => {
  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };
  const initializeTimes = () => [...fetchAPI(new Date())];
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function submitForm(values){
    console.log(values)
    submitAPI(values)

  }
  return (
    <>
      <div className="booking-header">
        <h2>Reserve a table</h2>
      </div>
    <div className="container booking">
      <Myform availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
    </>
  );
};

export default Booking;
