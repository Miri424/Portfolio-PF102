export function setDataInLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getDataFromLocal(key) {
   return JSON.parse(localStorage.getItem(key));

}