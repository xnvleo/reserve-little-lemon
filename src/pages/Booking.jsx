import './Booking.css'
import BookingForm from "../Components/BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../fakeApi";


const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = () => [...fetchAPI(new Date()),];

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  // const [availableTimes,setAvailableTimes] = useState(initializeTimes)

  // const submitForm = formData  => {
  //   const response = submitAPI (formData);
  //   if response
  // }

  return (
    <div className="container booking">
      <div className="booking-header">
        <h2>Reserve a table</h2>
      </div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Booking;
