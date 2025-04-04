"use client";
import React, { useState } from "react";
import mailimage from "../../../public/images/kakushin-gmail.png";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import { ComplexButton } from "../components/Buttons/buttons";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [everything, setEverything] = useState("");

  const textFieldStyles = {
    // Make the label text white
    "& .MuiInputLabel-root": {
      color: "white",
    },
    // Keep it white when focused
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    // Make the actual input text white
    "& .MuiInputBase-input": {
      color: "white",
    },
    // Underline color (for variant="standard")
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
  };

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
          // Reset form fields
          setName("");
          setMail("");
          setEverything("");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Message Sending Failed!");
        }
      );
  };

  return (
    <div
      className="bg-[#0A192E] md:mt-10 md:pt-8 h-full md:h-[80vh] flex justify-center items-center"
      id="contact"
    >
      <div>
        <div className="w-full flex flex-col md:mb-20 mb-10">
          <h2 className="largeText mb-5 text-center text-white">
            get in touch
          </h2>
          <h2 className="titleTextLG text-center text-white">Contact</h2>
        </div>

        <div className="flex flex-col md:gap-10 items-center justify-center md:mt-24 mt-14">
          <form
            className="flex flex-col md:flex-row justify-center items-center lg:items-end gap-10"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Your Name"
              type="text"
              variant="standard"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={textFieldStyles}
            />
            <TextField
              label="Email"
              type="email"
              variant="standard"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              sx={textFieldStyles}
            />
            <TextField
              label="Tell Us Everything"
              type="text"
              variant="standard"
              required
              value={everything}
              onChange={(e) => setEverything(e.target.value)}
              sx={textFieldStyles}
            />
            <div className="flex items-center flex-col">
              <ComplexButton type="submit" variant="contained" text="Send" />
            </div>
          </form>
        </div>

        <div className="py-24 flex flex-wrap flex-col gap-10 items-center md:flex-row md:items-start md:justify-evenly">
          <div className="flex flex-wrap flex-col items-center text-white">
            <div className="border-2 border-solid h-full p-5 rounded-[56%] border-[#1E74B4]">
              <Image
                alt="Location"
                src="/icons/location.svg"
                width={30}
                height={30}
              />
            </div>
            <h2 className="mt-5">Visit Us</h2>
            <div className="flex flex-wrap flex-col items-center mt-4">
              <p>London, UK</p>
              <p>Nicosia, Cyprus</p>
              <p>Athens, Greece</p>
              <p>Islamabad, Pakistan</p>
              <p>Harare, Zimbabwe</p>
            </div>
          </div>

          <div className="flex flex-wrap flex-col items-center text-white">
            <div className="border-2 border-solid h-full p-5 rounded-[56%] border-[#1E74B4]">
              <Image
                onClick={() =>
                  window.open("mailto:iokakushin@gmail.com", "_blank")
                }
                alt="Email"
                className="icons cursor-pointer"
                src="/icons/email.svg"
                width={30}
                height={30}
              />
            </div>
            <h2 className="mt-5">Mail Us</h2>
            <p
              onClick={() =>
                window.open("mailto:iokakushin@gmail.com", "_blank")
              }
              className="cursor-pointer text-blue-800 underline"
            >
              Send Email
            </p>
          </div>

          <div className="flex flex-wrap flex-col items-center text-white">
            <div className="border-2 border-solid h-full p-5 rounded-[56%] border-[#1E74B4] cursor-pointer">
              <Image
                onClick={() =>
                  window.open("https://wa.me/35796590911", "_blank")
                }
                alt="Whatsapp"
                src="/icons/whatsapp.svg"
                width={30}
                height={30}
                className="cursror-pointer"
              />
            </div>

            <h2 className="mt-5">Chat Now</h2>
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
      </div>
    </div>
  );
};

export default Contact;
