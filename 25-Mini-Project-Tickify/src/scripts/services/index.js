import { BASE_URL } from "../constants/api.js";

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

export async function patchAsync(endpoint, id, data) {
    try {
      const url = id ? `${BASE_URL}/${endpoint}/${id}` : `${BASE_URL}/${endpoint}`;
      const response = await axios.patch(url, data);
      return response.data;
    } catch (err) {
        handleError(err)
        throw err;
    }
  }

export async function deleteEvent(eventId) {
    try {
      const response = await axios.delete(`${BASE_URL}/events/${eventId}`); 
    return response.data
    } catch (err) {
      handleError(err)
       throw err
    }
  }


export async function getEventById(endpoint,id) {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
        return response.data
    } catch (err) {
        handleError(err)
        throw err
    }
}

export async function updateUserData(userId, updatedData) {
    try {
        const response = await axios.patch(`${BASE_URL}/users/${userId}`, updatedData);
        return response.data;
    } catch (err) {
        handleError(err)
        throw err;
    }
}

export function handleError(err) {
    console.error("An error occured : ", err);
}

export function fieldsChecker(fields) {
    for (const key in fields) {
        if (!fields[key]) {
            return false;
        }
    }
    return true;
}