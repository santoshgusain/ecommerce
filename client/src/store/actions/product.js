import { productTypes } from "../types";
import axios from "axios";

export const loadProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: productTypes.IS_LOADING,
      payload: true,
    });

    const products = (await axios.get("http://localhost:2009/products")).data;

    dispatch({
      type: productTypes.LOAD_PRODUCTS,
      payload: { products },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};

export const getProductById = (_id) => async (dispatch, getState) => {
  try {

    console.log("hello world");
    console.log(_id,"_id");
    dispatch({
      type: productTypes.IS_LOADING,
      payload: true,
    });

    const singleProduct = (
      await axios.get("http://localhost:2009/products", {
        params: {
          _id,
        },
      })
    ).data;

    dispatch({
      type: productTypes.LOAD_SINGLE_PRODUCT,
      payload: { singleProduct },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};

export const findProducts = (name) => async (dispatch, getState) => {
  try {
    dispatch({
      type: productTypes.IS_LOADING,
      payload: true,
    });

    const users = (await axios.get(`http://localhost:2009/users/find/${name}`))
      .data;

    dispatch({
      type: productTypes.FIND_PRODUCT,
      payload: { users },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};
