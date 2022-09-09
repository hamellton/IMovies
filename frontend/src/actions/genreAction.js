import { GET_GENRES_ERROR, GET_GENRES_SUCCESS } from "./actionTypes";
import Axios from "axios";

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const result = await Axios.get("/api/genres");
      result.data = result.data.map(el => {
        return {
          value: el.genre
        }
      })
      dispatch({ type: GET_GENRES_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: GET_GENRES_ERROR, error });
    }
  };
};

