"use client";
import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ComplexButton } from "../components/Buttons/buttons";
import emailjs from "@emailjs/browser";

const ConsultationForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    email: "",
    website: "",
    consultationMethod: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const selections = [
    { label: "Receive Results via Email" },
    { label: "30-Minute Free Consultation Call" },
    { label: "1-Hour Consultation Call (€40)" },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, website, consultationMethod } = formData;

    // Simple Validation
    if (!email || !website || !consultationMethod) {
      setStatusMessage("Please fill in all fields.");
      return;
    }

    // EmailJS Send Logic
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage(
            "Your consultation request has been sent successfully!"
          );
          setFormData({ email: "", website: "", consultationMethod: "" });
        },
        (error) => {
          setStatusMessage("Failed to send request. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  // Text Field Styles
  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#1C6CA8" },
      "&:hover fieldset": { borderColor: "#1C6CA8" },
      "&.Mui-focused fieldset": { borderColor: "#1C6CA8" },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "black" },
  };

  return (
    <section className="md:p-32 p-20">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h2 className="title">
          Let's Talk Growth: Your Free 30-Minute Power Session Awaits!
        </h2>
        <p className="paragraph text-center sm:px-14">
          Unlock your business’s next big move with a no-strings-attached,
          30-minute strategy session. Drop your deets below, and let’s make some
          magic happen.
        </p>
      </div>
      <div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-center md:mt-20 mt-10"
        >
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="standard"
            required
            value={formData.email}
            onChange={handleChange}
            sx={textFieldStyles}
          />
          <TextField
            id="website"
            label="Website URL"
            type="url"
            variant="standard"
            required
            value={formData.website}
            onChange={handleChange}
            sx={textFieldStyles}
          />
          <TextField
            id="consultationMethod"
            select
            label="Select"
            helperText="Select your preferred consultation method:"
            value={formData.consultationMethod}
            onChange={handleChange}
            sx={textFieldStyles}
          >
            {selections.map((selection) => (
              <MenuItem key={selection.label} value={selection.label}>
                {selection.label}
              </MenuItem>
            ))}
          </TextField>
          <ComplexButton
            text="Send"
            aria-label="Submit consultation form"
            variant="contained"
            onClick={handleSubmit}
          />
        </form>
        {statusMessage && (
          <p
            className={`mt-4 text-center ${
              statusMessage.includes("success")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default ConsultationForm;
