import { useState } from "react";
import "./BookingForm.css";


export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    date: "",
    time: "00:00",
    noOfGuests: 1,
    occasion: "Birthday"
  })

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleDateChange = async (event) => {
    const { name, value } = event.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
    dispatch({ type: 'UPDATE_TIMES', payload: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitForm(formData)
  }

  const currentDate = new Date().toISOString().split("T")[0]
  const options = availableTimes.map(time => <option key={time}>{time}</option>)
  return (
    <main>
      <div className="banner">
        <p>Please fill in the form below accurately to enable us serve you nicely.</p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="flex vw-50 centered">
            <div className="row">
              <div className="input-container">
                <span className="label">Enter first name</span>
                <input
                  type="text"
                  placeholder="First name"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  required />
              </div>

              <div className="input-container">
                <span className="label">Enter last name</span>
                <input
                  type="text"
                  placeholder="Last name"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  required />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <span className="label">Enter phone number</span>
                <input
                  type="text"
                  id="contact-number"
                  name="contactNumber"
                  placeholder="Phone number (***-***-****)"
                  value={formData.contactNumber}
                  onChange={handleFormChange}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
              </div>
              <div className="input-container">
                <span className="label">Enter email</span>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleFormChange} />
              </div>

            </div>
            <div className="row">
              <div className="input-container">
                <span className="label">Reservation date</span>
                <input
                  type="date"
                  placeholder="Choose date"
                  id="res-date"
                  name="date"
                  value={formData.date}
                  onChange={handleDateChange}
                  required
                  min={currentDate} />
              </div>
              <div className="input-container">
                <span className="label">Reservation time</span>
                <select id="res-time " name="time" value={formData.time} onChange={handleFormChange} required>
                  {options}
                </select>
              </div>

            </div>
            <div className="row">
              <div className="input-container">
                <span className="label">Number of guests</span>
                <input
                  type="number"
                  placeholder="1"
                  min="1" max="10"
                  required
                  id="guests"
                  name="noOfGuests"
                  value={formData.noOfGuests}
                  onChange={handleFormChange} />
              </div>

              <div className="input-container">
                <span className="label">Occassion (optional)</span>
                <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleFormChange}>
                  <option>No occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>
            </div>
            <div className="row">
              <input className="submit" type="submit" value="Reserve" aria-label="submit button" />
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}


