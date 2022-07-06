import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux-store/store";
import App from "./App";
import HomeScreen from "./screens/home-screen/HomeScreen";
import DetailsScreen from "./screens/details-screen/DetailsScreen";
import NotFoundScreen from "./screens/not-found-screen/NotFoundScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path="details/:newsId" element={<DetailsScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
);
