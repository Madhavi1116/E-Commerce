import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    mobile: '',
    gender: '',
    country: '',
    termsAccepted: false,
  });

  const countries = ["India", "USA", "UK", "Australia", "Germany", 
    "Africa", "China", "Japan", "Switzerland", "Italy"];

    const handleChange = (event) => {
      const { name, value, type, checked } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z\s]{2,10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mobileRegex = /^\d{10}$/;

    if (!nameRegex.test(formData.firstname)) {
      alert("First name must be 2-10 characters and only contain alphabets.");
      return;
    }

    if (!nameRegex.test(formData.lastname)) {
      alert("Last name must be 2-10 characters and only contain alphabets.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!mobileRegex.test(formData.mobile)) {
      alert("Mobile number must be a valid 10-digit number.");
      return;
    }

    if (!formData.gender) {
      alert("Please select your gender.");
      return;
    }

    if (!formData.country) {
      alert("Please select your country.");
      return;
    }

    if (!formData.termsAccepted) {
      alert("You must accept the terms and conditions.");
      return;
    }

    console.log("Submitted Data:", formData);
  };
  

  return (
    <div className="main">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        
        <label>First Name</label>
        <input type='text' name="firstname" value={formData.firstname} onChange={handleChange} required />

        <label>Last Name</label>
        <input type='text' name="lastname" value={formData.lastname} onChange={handleChange} required />

        <label>Email</label>
        <input type='email' name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input type='password' name="password" value={formData.password} onChange={handleChange} required />

        <label>Confirm Password</label>
        <input type='password' name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} required />

        <label>Mobile Number</label>
        <input type='number' name="mobile" value={formData.mobile} onChange={handleChange} required />

        <label>Gender</label>
        <div>
          {["Male", "Female", "Other"].map((gender) => (
            <label key={gender}>
              <input 
                type="radio" 
                name="gender" 
                value={gender} 
                checked={formData.gender === gender} 
                onChange={handleChange} 
              />
              {gender}
            </label>
          ))}
        </div>
        
        <label>Country</label>
        <select 
          name="country" 
          value={formData.country} 
          onChange={handleChange} 
          required
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>


        <label>
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />Accept Terms & Conditions
        </label>
        
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
