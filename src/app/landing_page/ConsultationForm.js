"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { ComplexButton } from "../components/Buttons/buttons";

const ConsultationForm = () => {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [consultationMethod, setConsultationMethod] = useState("");

  const selections = [
    {
      label: "Receive Results via Email",
    },
    {
      label: "30-Minute Free Consultation Call",
    },
    {
      label: "1-Hour Consultation Call (€40)",
    },
  ];

  // Define the common styles
  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#1C6CA8",
      },
      "&:hover fieldset": {
        borderColor: "#1C6CA8",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1C6CA8",
      },
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1C6CA8",
    },
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
        <form className="flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-center md:mt-20 mt-10">
          <TextField
            label="Email"
            type="email"
            variant="standard"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={textFieldStyles}
          />
          <TextField
            label="Website URL"
            type="url"
            variant="standard"
            required
            onChange={(e) => setWebsite(e.target.value)}
            sx={textFieldStyles}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            helperText="Select your preferred consultation method:"
            value={consultationMethod}
            onChange={(e) => setConsultationMethod(e.target.value)}
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
            type="submit"
            variant="contained"
          />
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
