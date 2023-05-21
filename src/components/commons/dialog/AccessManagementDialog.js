import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function AccessManagementDialog(props) {
  const { open, onClose, onTextValueSubmit } = props;

  const [textValue, setTextValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [selectedOption, setSelectedOption] = useState("GYM_MANAGER");

  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
    setEmailError(!isValidEmail(value));
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextSubmit = () => {
    // handle text value submission logic here
    onTextValueSubmit({ email: textValue, role: selectedOption });
  };

  const isValidEmail = (value) => {
    // basic email validation check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      PaperProps={{
        style: { width: "600px", maxHeight: "calc(100% - 64px)", overflowY: "auto" }
      }}
    >
      <DialogTitle>Enter User Details</DialogTitle>
      <DialogContent style={{ paddingTop: 25 }}>
        <FormControl fullWidth>
          <InputLabel id="select-role-label">Role</InputLabel>
          <Select
            labelId="select-role-label"
            id="select-role"
            value={selectedOption}
            onChange={handleOptionChange}
            style={{ marginTop: 5}}
          >
            <MenuItem value="GYM_MANAGER">Gym Manager</MenuItem>
            <MenuItem value="PERSONAL_TRAINER">Personal Trainer</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Email Address"
          value={textValue}
          onChange={handleTextChange}
          error={emailError}
          helperText={emailError ? "Please enter a valid email address" : ""}
          type="email"
          fullWidth
          style={{ marginTop: "16px" }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleTextSubmit} disabled={emailError || !textValue}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
