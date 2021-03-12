import {
    ITEM_SEARCH_REQUEST
  } from "../constants/searchConstants";
  
  import axios from "axios";
  
  const SearchAction = (search) => async (dispatch) => {
    try {
      const datas = await axios.get("/api/course/fulltextsearch/result"+search);
      dispatch({ type: ITEM_SEARCH_REQUEST, payload: datas.data });
    } catch (error) {

    }

  };

  
  export { SearchAction};
  