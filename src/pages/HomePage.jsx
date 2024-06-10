import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/home_components/NavBarComponent";
import CardsComponents from "../components/home_components/CardsComponents";
import AddMemoryButton from "../components/home_components/AddMemoryButton";
import { getUserDataFromLocalStorage } from "../util/localStorageUtils.js";
import { firebaseApp } from "../../service/firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_API_ENDPOINT;

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [imageUrl, setImageUrl] = useState(null);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const userData = getUserDataFromLocalStorage();
    if (!userData) {
      navigate("/login"); // Redirect to login page if not authenticated
      return; // Return early to prevent further execution
    }

    const fetchData = async () => {
      setLoading(false);
      setData(userData);
      // Fetch image URL from Firebase Storage
      const storage = getStorage(firebaseApp);
      const imageUrl = await getImageUrl(
        storage,
        `meimoreis/user/${userData.userData.profilePicture}`
      );
      setImageUrl(imageUrl);

      // Axios GET request
      try {
        const response = await axios.get(`${baseUrl}/post`, {
          withCredentials: true,
        });
        console.log("Data from API:", response.data);
        setApiData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error appropriately
      }
    };

    fetchData();
  }, []); //Disable dependencies on useEffect

  // Define the getImageUrl function
  const getImageUrl = async (storage, imagePath) => {
    try {
      const imageRef = ref(storage, imagePath);
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };

  return (
    <>
      {loading ? (
        <div> </div>
      ) : (
        <div
          style={{
            display: "block",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Nav
            name={`${data.userData.fName} ${data.userData.lName} `}
            image={imageUrl}
          />
          <AddMemoryButton />
          {apiData.map((data, index) => (
            <CardsComponents key={index} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
