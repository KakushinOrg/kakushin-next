"use client";
import React, { useState } from "react";
import mailimage from "../../../public/images/kakushin-gmail.png";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";
import { ComplexButton } from "../components/Buttons/buttons";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [everything, setEverything] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isFormVisible, setFormVisible] = useState(true);

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "goldenrod",
      },
      "&:hover fieldset": {
        borderColor: "goldenrod",
      },
      "&.Mui-focused fieldset": {
        borderColor: "goldenrod",
      },
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "goldenrod",
    },
  };

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
          setMessageType("success");
          setStatusMessage("Your message has been sent successfully!");
          setFormVisible(false);
          setTimeout(() => {
            setFormVisible(true);
            setStatusMessage("");
          }, 5000);
          setName("");
          setMail("");
          setEverything("");
        },
        (error) => {
          setMessageType("error");
          setStatusMessage("Message sending failed. Please try again later.");
        }
      );
  };

  return (
    <div className="bg-[#f4f4f7] md:mt-10 md:pt-8" id="contact-section">
      <div>
        <div className="w-full flex flex-col md:mb-20 mb-10">
          <h2 className="largeText mb-5 text-center">get in touch</h2>
          <h2 className="titleTextLG text-center">Contact</h2>
        </div>

        <div className="flex flex-col md:gap-10 items-center justify-center md:mt-24 mt-14">
          {!isFormVisible && (
            <div
              className={`${
                messageType === "success"
                  ? "bg-green-100 border-green-500 text-green-700"
                  : "bg-red-100 border-red-500 text-red-700"
              } border-2 px-4 py-3 rounded w-3/4 text-center`}
            >
              <p>{statusMessage}</p>
            </div>
          )}

          {isFormVisible && (
            <form
              className="flex flex-col md:flex-row justify-center items-end gap-10"
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
          )}
        </div>

        <div className="py-24 flex flex-wrap flex-col gap-10 items-center md:flex-row md:items-start md:justify-evenly">
          <div className="flex flex-wrap flex-col items-center">
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

          <div className="flex flex-wrap flex-col items-center">
            <div className="border-2 border-solid h-full p-5 rounded-[56%] border-[#1E74B4]">
              <Image
                alt="Email"
                className="icons"
                src="/icons/email.svg"
                width={30}
                height={30}
              />
            </div>
            <h2 className="mt-5">Mail Us</h2>
            <Image width={150} height={150} src={mailimage} alt="Mail Us" />
          </div>

          <div className="flex flex-wrap flex-col items-center">
            <div className="border-2 border-solid h-full p-5 rounded-[56%] border-[#1E74B4]">
              <Image
                alt="Whatsapp"
                src="/icons/whatsapp.svg"
                width={30}
                height={30}
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
