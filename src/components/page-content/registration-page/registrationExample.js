import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  const [formValues, setFormValues] = useState({
    firstName: "qwe",
    lastName: "as"
  });

  const handleFormChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      {gymRegisterData[0].fields.map((item, index) => (
        <TextField
          value={formValues[item.name]}
          onChange={handleFormChange}
          inputProps={{ maxLength: item.maxLength }}
          {...item}
        />
      ))}
      <br />
      {formValues.lastName + " " + formValues.firstName}
      <button onClick={() => alert(JSON.stringify(formValues))}>Prompt form values</button>
    </>
  );
}

const gymRegisterData = [
  {
    label: "General",
    fields: [
      {
        id: "general-gym-register",
        name: "firstName",
        label: "Ez a first name",
        required: true,
        defaultValue: "",
        maxLength: 12
      },
      {
        id: "general-gym-register",
        name: "lastName",
        label: "Ez a last name",
        required: true,
        defaultValue: "",
        maxLength: 12
      }
    ]
  }
];
