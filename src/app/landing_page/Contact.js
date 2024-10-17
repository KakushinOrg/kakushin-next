"use client";
import React, { useState } from "react";
import mailimage from "../../../public/images/kakushin-gmail.png";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [everything, setEverything] = useState("");

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
    <>
      <div>
        {/* Display API info */}
        <div className="text-center">
          <p>{apiKey}</p>
          <p>{apiUrl}</p>
        </div>

        <div className="w-full flex flex-col md:mb-20 mb-10">
          <h1 className="largeText mb-5 text-center">get in touch</h1>
          <h2 className="titleTextLG text-center">Contact</h2>
        </div>

        <div className="flex flex-col md:gap-10 items-center justify-center md:mt-20 mt-10">
          <form
            className="flex flex-col md:flex-row gap-10"
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
              <Button
                className="bg-[#DAA520] rounded-xl px-5 py-2 text-[15px] font-medium"
                type="submit"
                variant="contained"
              >
                Send
              </Button>
            </div>
          </form>
        </div>

        <div className="my-24 flex flex-wrap flex-col gap-10 items-center md:flex-row md:items-start md:justify-evenly">
          <div className="flex flex-wrap flex-col items-center">
            <div className="border-2 border-solid h-full p-5 rounded-[56%] border-[#CFA144]">
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
            <div className="border-2 border-solid h-full p-5 rounded-[56%] border-[#CFA144]">
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
            <div className="border-2 border-solid h-full p-5 rounded-[56%] border-[#CFA144]">
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
    </>
  );
};

export default Contact;
