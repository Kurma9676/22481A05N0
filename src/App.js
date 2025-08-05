import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Container, Typography } from "@mui/material";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import RedirectHandler from "./pages/RedirectHandler";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth="md" sx={{ paddingTop: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            React URL Shortener
          </Typography>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/:code" element={<RedirectHandler />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
