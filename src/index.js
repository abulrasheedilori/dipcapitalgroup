import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomeScreen from "./screens/home-screen/HomeScreen"
import DetailsScreen from "./screens/details-screen/DetailsScreen"
import ContactUsScreen from "./screens/contact-screen/ContactUsScreen"
import NotFoundScreen from "./screens/not-found-screen/NotFoundScreen"

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeScreen />} />
        <Route path="details" element={<DetailsScreen />} />
        <Route path="contact" element={<ContactUsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
