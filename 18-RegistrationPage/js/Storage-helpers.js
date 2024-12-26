export { setDataInLocal, getDataFromLocal };

function setDataInLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getDataFromLocal(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}
