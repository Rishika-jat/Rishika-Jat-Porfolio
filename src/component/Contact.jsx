


import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoLocation, IoCall, IoMail } from "react-icons/io5";
import axios from "axios";
import Swal from 'sweetalert2';

const Contact = () => {

  let initialValue= {name:"", email:"", message:""}
  const changeMode = useSelector((state) => state.theme.changeMode);
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/send-email", formData);
      
      // Check if the email was sent successfully and show an alert
     
      if (res.data.message === "Email sent successfully") {
        Swal.fire({ title: 'Success!', text: 'Your message has been sent successfully!', icon: 'success', confirmButtonText: 'OK' });
        setFormData(initialValue)
      } else {
      console.log(res.data.message);
      
      Swal.fire({ title: 'Error!', text: 'An error occurred. Please try again.', icon: 'error', confirmButtonText: 'OK' });
      }
      
      // Clear the form fields after submission
      setFormData(initialValue);

    } catch (error) {
      Swal.fire({ title: 'Error!', text: 'An error occurred. Please try again.', icon: 'error', confirmButtonText: 'OK' });
      setFormData(initialValue); // Clear the fields even if there was an error
    }
  };

  return (
    <>
      <div className="contact-section flex flex-col gap-5 items-center justify-center   ">
        <h1
          className={`text-7xl bg-clip-text pb-5 md:text-7xl ${
            changeMode ? "text-transparent dark-gradient-text" : "light-heading"
          }`}
        >
          Let's Work together
        </h1>
        <div className="shadow-2xl flex items-center justify-between gap-20 py-10 px-20 contact-main">
          <div className="flex flex-col justify-start gap-10 items-start">
           
            <div className="flex flex-col justify-start gap-10 items-start">
  <a
    href="https://www.google.com/maps?q=Khategaon,+District+Dewas,+Madhya+Pradesh,+India"
    target="_blank"
    rel="noopener noreferrer"
    className={`flex gap-2 items-center justify-center no-underline ${changeMode?"text-white":"text-black"} `}
  >
    <button className="bg-white h-8 w-8 px-2 py-2 rounded-full flex items-center justify-center">
      <IoLocation className="text-2xl" />
    </button>
    <p>
      Khategaon , District - Dewas State - Madhya Pradesh , India
    </p>
  </a>
</div>

            <div className="flex gap-2 items-center justify-center">
  <a href="tel:+916264731036" className={`flex items-center gap-2 no-underline ${changeMode?"text-white":"text-black"}`}>
    <button className="bg-white h-8 w-8 px-2 py-2 rounded-full flex items-center justify-center">
      <IoCall className="text-2xl" />
    </button>
    <p>+91 6264731036</p>
  </a>
</div>

          
            <div className="flex gap-2 items-center justify-center">
  <a href="mailto:rishikajat03@gmail.com" className={`flex items-center gap-2 no-underline  ${changeMode?"text-white":"text-black"}`}>
    <button className="bg-white h-8 w-8 px-2 py-2 rounded-full flex items-center justify-center">
      <IoMail className="text-2xl" />
    </button>
    <p>rishikajat03@gmail.com</p>
  </a>
</div>

          </div>

          <div className=" p-8 rounded-lg  w-full max-w-md contact-form-container ">
            <h2 className="text-2xl font-bold mb-6 text-center">Send A Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Send a Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className={`${changeMode ? 'image-container' : 'light-image-container'} w-fit send-btn rounded-3xl text-white`}>
                <button className="bg-transparent border-none px-3 py-2" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
