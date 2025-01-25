import { BASE_URL } from "../../assets/constants/api.js";

export async function getAll(endpoint) {
    try {
    const response = await axios(`${BASE_URL}/${endpoint}`) 
    return response.data;
    }
    catch(err) {
        handleError(err)
        throw err;
    }
}


export async function postAsync(endpoint, payload) {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
        return response.data;
    } catch (err) {
        handleError(err)
        throw err;
    }
    
}

export async function deleteEvent(eventId) {
    try {
      const response = await axios.delete(`${BASE_URL}/events/${eventId}`); 
    } catch (err) {
      handleError(err)
    }
  }


export async function getEventById(endpoint,id) {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
        return response.data
    } catch (err) {
        handleError(err)
    }
}

export function handleError(err) {
    console.error("An error occured : ", err);
}