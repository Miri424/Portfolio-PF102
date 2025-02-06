/**
  @param {string} key
  @param {any} value 
 */
export function setLocalStorageItem(key, value) {
    try {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, stringValue);
    } catch (error) {
        console.error("Failed to set item in localStorage:", error);
    }
}

/**
  @param {string} key 
  @returns {any}
 */
export function getLocalStorageItem(key) {
    try {
        const stringValue = localStorage.getItem(key);
        return stringValue ? JSON.parse(stringValue) : null;
    } catch (error) {
        console.error("Failed to get item from localStorage:", error);
        return null;
    }
}

/**
 @param {string} key
 */
export function removeLocalStorageItem(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Failed to remove item from localStorage:", error);
    }
}


export function getUserData() {
    const user = localStorage.getItem("loggedInUser");
    return user ? JSON.parse(user) : null;
}