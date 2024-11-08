"use client";
import React, { useState } from "react";
import mailimage from "../../../public/images/kakushin-gmail.png";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [everything, setEverything] = useState("");
  const [address, setAddress] = useState("");

  // const textFieldStyles = {
  //   "& .MuiInput-underline:before": {
  //     borderBottomColor: "white", // Default bottom border color
  //   },
  //   "& .MuiInput-underline:hover:before": {
  //     borderBottomColor: "white", // Bottom border color on hover
  //   },
  //   "& .MuiInput-underline:after": {
  //     borderBottomColor: "white", // Bottom border color when focused
  //   },
  //   "& .MuiInputLabel-root": {
  //     color: "white",
  //   },
  //   "& .MuiInputLabel-root.Mui-focused": {
  //     color: "white",
  //   },
  //   "& .MuiInputBase-input": {
  //     color: "white", // Text color in input field
  //   },
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email_id: mail,
      message: everything,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          alert("Message Sent Successfully!");
          setName("");
          setMail("");
          setEverything("");
          setAddress("");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Message Sending Failed!");
        }
      );
  };

  const decodeEmail = (encodedEmail) => {
    try {
      return atob(encodedEmail);
    } catch {
      return "info@kakushin.io";
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-300 text-white p-8 relative"
      style={{
        backgroundImage: `url('/images/bg-black.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Information */}
        <div className="flex w-3/4 flex-col justify-center md:items-center gap-8">
          <h2 className="text-4xl font-bold my-16">CONTACT US</h2>
          <div>
            <div className="flex gap-5 mt-6">
              <Image
                alt="Whatsapp"
                src="/icons/whatsapp.svg"
                width={30}
                height={30}
              />
              <h2 className="text-2xl font-semibold">Chat Now</h2>
            </div>
            <div className=" mt-2">
              <Link
                href="https://wa.me/35796590911"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                +357 96 590911
              </Link>
            </div>
          </div>

          <div>
            <div className="flex gap-3 mr-3 mt-6">
              <Image
                alt="Location"
                src="/icons/location.svg"
                width={30}
                height={30}
              />
              <h2 className="text-2xl font-semibold">Location</h2>
            </div>
            <div className="mt-2">
              <p>London, UK</p>
              <p>Nicosia, Cyprus</p>
              <p>Athens, Greece</p>
              <p>Islamabad, Pakistan</p>
              <p>Harare, Zimbabwe</p>
            </div>
          </div>

          <div>
            <div className="flex gap-4 mr-4 mt-6">
              <Image
                alt="Email"
                className="icons"
                src="/icons/email.svg"
                width={25}
                height={25}
              />
              <h2 className="text-2xl font-semibold">Mail Us</h2>
            </div>
            <div className="mt-2">
              {/* <Image
              className="ml-12"
              width={170}
              height={170}
              src={mailimage}
              alt="Mail Us"
            /> */}
              <h2>{decodeEmail("aW5mb0BrYWt1c2hpbi5pbw==")}</h2>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        {/* <div className="flex text-white flex-col md:gap-10 items-center justify-center md:mt-24 mt-14">
          <form
            className="flex w-80 text-white flex-col gap-20"
            onSubmit={handleSubmit}
          >
            <TextField
              className="text-white"
              label="Enter Your Name"
              type="text"
              variant="standard"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={textFieldStyles}
            />
            <TextField
              label="Enter Your Email"
              type="email"
              variant="standard"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              sx={textFieldStyles}
            />
            <div>
              <TextField
                label="Tell Us Everything"
                type="text"
                variant="standard"
                className="w-80"
                required
                value={everything}
                onChange={(e) => setEverything(e.target.value)}
                sx={textFieldStyles}
              />
            </div>
            <div className="flex items-center flex-col">
              <Button
                className="bg-[#DAA520] rounded-xl px-5 w-full py-2 text-[15px] font-medium"
                type="submit"
                variant="contained"
              >
                Send
              </Button>
            </div>
          </form>
        </div> */}

        <div className="bg-cover bg-center bg-no-repeat bg-opacity-80 md:mt-48 p-6 md:p-6 w-full md:w-5/6 mx-auto text-white rounded-md shadow-md">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-2 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none"
                  required
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-2 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="font-semibold">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                placeholder="Enter your address"
                onChange={(e) => setAddress(e.target.value)}
                className="mt-2 p-2 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="mt-2 p-2 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none resize-none"
                required
                value={everything}
                onChange={(e) => setEverything(e.target.value)}
              />
            </div>

            <Button
              className="bg-[#DAA520] rounded-full w-full px-5 py-2 text-[15px] font-medium"
              type="submit"
              variant="contained"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
