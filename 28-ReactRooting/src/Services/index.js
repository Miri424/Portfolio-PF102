import { BASE_URL } from "./Base/api.js"
import axios from 'axios';

export const getProducts = async () => {
    try {
      const response = await axios(`${BASE_URL}/products`)
      return response.data;
    } catch (error) {
        handleError(error)  
    }
  };
  
  export const addProduct = async (payload) => {
    try {
      const response = await axios.post(BASE_URL, payload);
      return response.data;
    } catch (error) {
        handleError(error)
    }
  };
  
  export const deleteProduct = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/products/${id}`);
    } catch (error) {
     handleError(error)
    }
  };


 export function handleError(error) {
    console.error(error)
  }