export { setLocalStorage, getLocalStorage };

function getLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {};  // Return an empty object if no data exists
    } catch (error) {
        console.error(`Error reading ${key} from localStorage`, error);
        return {};  // Return empty object on error
    }
}

function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));  // Ensure value is properly stringified
    } catch (error) {
        console.error(`Error writing ${key} to localStorage`, error);
    }
}