import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [formData, setFormdata] = useState({
    resDate: "",
    resTime: "",
    guestNumber: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handelDateChange(event) {
    setFormdata((prevFormData) => {
      return {
        ...prevFormData,
        resDate: event.target.value,
      };
    });
    dispatch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    //  submitToApi(formData)
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="card-form">
        <h3>Find a table</h3>
        <label htmlFor="res-date">Choose date</label>
        <input
          onChange={handelDateChange}
          type="date"
          id="res-date"
          className="form--input"
          name="resDate"
          value={formData.resDate}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          onChange={handleChange}
          id="res-time"
          name="resTime"
          value={formData.resTime}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
          ;
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          onChange={handleChange}
          className="form--input"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guest"
          name="guestNumber"
          value={formData.guestNumber}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          onChange={handleChange}
          id="occasion"
          className="form--select"
          name="occasion"
          value={formData.occasion}
        >
          <option>--Choose--</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
        </select>
      </div>

      <div className="card-form">
        <h3>Contact Info</h3>
        <input
          aria-label="first name"
          type="text"
          placeholder="First Name (required)"
          onChange={handleChange}
          name="firstName"
          id="firstName"
          required
          minLength={2}
        />
        <input
          aria-label="last name"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          id="lastName"
        />
        <input
          aria-label="email"
          type="email"
          placeholder="email (required)"
          onChange={handleChange}
          name="email"
          id="email"
          required
        />
        <input
          aria-label="phone number"
          type="number"
          placeholder="phone number"
          onChange={handleChange}
          name="phone"
          id="phone"
        />
      </div>

      <button className="btn-submit" name="submit">
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
