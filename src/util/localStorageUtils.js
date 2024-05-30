
// Function to save data to localStorage
const saveUserDataToLocalStorage = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };
  
  // Function to retrieve data from localStorage
const getUserDataFromLocalStorage = () => {
    const userDataString = localStorage.getItem("userData");
    return userDataString ? JSON.parse(userDataString) : null;
  };
  
  // Function to remove data from localStorage
const removeUserDataFromLocalStorage = () => {
    localStorage.removeItem("userData");
  };

export {saveUserDataToLocalStorage, getUserDataFromLocalStorage, removeUserDataFromLocalStorage}
  