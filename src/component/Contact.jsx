import React from "react";
import { useSelector } from "react-redux";
import { IoLocation, IoCall, IoMail } from "react-icons/io5";

const Contact = () => {
  const changeMode = useSelector((state) => state.theme.changeMode);
  return (
    <>
     
        <div className="contact-section flex flex-col gap-5 items-center justify-center ">
          <h1
            className={`text-7xl bg-clip-text pb-5 ${
              changeMode
                ? "text-transparent dark-gradient-text"
                : "light-heading"
            }`}
          >
            Let's Work together
          </h1>
          <div className="shadow-2xl flex items-center justify-between gap-20 py-10 px-20 contact-main">
            <div className="flex flex-col justify-start gap-10 items-start">
              <div className="flex gap-2 items-center justify-center">
                <button className="bg-white h-8 w-8 px-2 py-2 rounded-full flex items-center justify-center">
                  <IoLocation className="text-2xl" />
                </button>
                <p>
                  Khategaon , District - Dewas State - MadhyaPradesh , India
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center ">
                <button className="bg-white h-8 w-8 px-2 py-2 rounded-full flex items-center justify-center">
                  <IoCall className="text-2xl" />
                </button>
                <p>+91 6264731036</p>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <button className="bg-white h-8 w-8 px-2 py-2 rounded-full flex items-center justify-center">
                  <IoMail className="text-2xl" />
                </button>
                <p>rishikajat03@gmail.com</p>
              </div>
            </div>
        
              
              <div className=" p-8 rounded-lg  w-full max-w-md contact-form-container ">
                
                <h2 className="text-2xl font-bold mb-6 text-center">
                 Send A Message
                </h2>
                <form className="contact-form">
                  
                  <div className="mb-4">
                    
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="fullname"
                    >
                      
                      Full Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="fullname"
                      type="text"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="mb-4">
                    
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div className="mb-4">
                    
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      
                      Send a Message
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className={`${changeMode ? 'image-container' : 'light-image-container'} w-fit rounded-3xl text-white`}>
              <button className='bg-transparent border-none px-3 py-2'>Send Message</button>
            </div>
                </form>
              </div>
          
          </div>
        </div>
      
    </>
  );
};

export default Contact;
