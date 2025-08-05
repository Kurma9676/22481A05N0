import React from "react";
import { TextField, Button, Paper } from "@mui/material";

export default function UrlForm() {
  return (
    <Paper style={{ padding: "20px", margin: "20px" }}>
      <TextField fullWidth label="Enter URL" variant="outlined" />
      <TextField fullWidth label="Custom Shortcode (optional)" variant="outlined" />
      <TextField fullWidth label="Validity (minutes)" variant="outlined" />
      <Button variant="contained" color="primary">Shorten</Button>
    </Paper>
  );
}
