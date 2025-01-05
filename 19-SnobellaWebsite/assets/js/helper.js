export { setLocalStorage, getLocalStorage };

function getLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {}; 
    } catch (error) {
        console.error(`Error reading ${key} from localStorage`, error);
        return {};  
    }
}

function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value)); 
    } catch (error) {
        console.error(`Error writing ${key} to localStorage`, error);
    }
}