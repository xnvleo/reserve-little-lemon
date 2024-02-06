import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const navigate = useNavigate();

  const initialValues = {
    resDate: "",
    resTime: "",
    guestNumber: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    resDate: Yup.date().required("Required"),
    resTime: Yup.string().required("Required"),
    guestNumber: Yup.number()
      .required("Required")
      .min(1, "Must be at least 1")
      .max(10, "Cannot be more than 10"),
    occasion: Yup.string(),
    firstName: Yup.string()
      .required("Required")
      .min(2, "Must be at least 2 characters"),
    lastName: Yup.string()
      .required("Required")
      .min(2, "Must be at least 2 characters"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string(),
  });
  const handleSubmit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    submitForm(values);
    navigate("/confirmation", {
      state: {
        date: values.resDate,
        time: values.resTime,
        name: values.firstName,
      },
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="booking-form">
        <label htmlFor="resDate">Choose date</label>
        <Field name="resDate" id="resDate">
          {(props) => {
            const { field, meta } = props;
            return (
              <>
                <input
                  type="date"
                  id="resDate"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    dispatch(e.target.value);
                  }}
                />
                {meta.touched && meta.error ? (
                  <div className="error">{meta.error}</div>
                ) : null}
              </>
            );
          }}
        </Field>

        <label htmlFor="resTime">Choose time</label>
        <Field as="select" id="resTime" name="resTime">
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </Field>
        <ErrorMessage name="resTime">
          {(erroMsg) => <div className="error">{erroMsg}</div>}
        </ErrorMessage>

        <label htmlFor="guestNumber">Number of guests</label>
        <Field
          type="number"
          placeholder="1 - 10 guests"
          id="guestNumber"
          name="guestNumber"
        />
        <ErrorMessage name="guestNumber">
          {(erroMsg) => <div className="error">{erroMsg}</div>}
        </ErrorMessage>

        <label htmlFor="occasion">Occasion</label>
        <Field as="select" id="occasion" name="occasion">
          <option>---Choose---</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
        </Field>
        <ErrorMessage name="occasion">
          {(erroMsg) => <div className="error">{erroMsg}</div>}
        </ErrorMessage>
        <label htmlFor="firstName">First name</label>
        <Field type="text" id="firstName" name="firstName" />
        <ErrorMessage name="firstName">
          {(erroMsg) => <div className="error">{erroMsg}</div>}
        </ErrorMessage>

        <label htmlFor="lastName">Last name</label>
        <Field type="text" id="lastName" name="lastName" />
        <ErrorMessage name="lastName">
          {(erroMsg) => <div className="error">{erroMsg}</div>}
        </ErrorMessage>

        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email">
          {(erroMsg) => <div className="error">{erroMsg}</div>}
        </ErrorMessage>
        <label htmlFor="phone">Phone number</label>
        <Field type="number" id="phone" name="phone" />
        <ErrorMessage name="phone">
          {(erroMsg) => <div className="error">{erroMsg}</div>}
        </ErrorMessage>
        <button type="submit" className="btn-submit" name="submit">
          Make your reservation
        </button>
      </Form>
    </Formik>
  );
}

export default BookingForm;
