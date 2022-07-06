import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../Utils";

const newsSlice = createSlice({
  name: "news",
  initialState: { news: [], newsLoading: false },
  reducers: {
    addNewsToRedux: (state, action) => {
      state.news = action.payload;
    },
    getNewsFromRedux: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  try {
    const response = await axios.get(API);
    // console.log("NEWS  -> ", `${JSON.stringify(response.data)}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchNewsAsync = async (dispatch) => {
  try {
    const controller = new AbortController();
    const signal = controller.signal;

    const response = await axios.get(API, { signal: signal });
    // console.log(JSON.stringify(response.data));
    dispatch(addNewsToRedux(response.data));
  } catch (err) {
    if (err.name === "AbortError") {
      // console.log("successfully aborted");
      return "successfully aborted";
    } else {
      // throw new Error(err);
      console.log("Error Ocurred", err);
    }
  }
};

export const { addNewsToRedux, getNewsFromRedux } = newsSlice.actions;
export const showNews = (state) => state.news.news;
export default newsSlice.reducer;
