import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/home_components/NavBarComponent";
import CardsComponents from "../components/home_components/CardsComponents";
import AddMemoryButton from "../components/home_components/AddMemoryButton";
import { getUserDataFromLocalStorage } from "../util/localStorageUtils.js";
import { firebaseApp } from "../../service/firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = getUserDataFromLocalStorage();
      if (!data) {
        navigate("/login");
      } else {
        setLoading(false);
        setData(data);
        // Fetch image URL from Firebase Storage
        const storage = getStorage(firebaseApp);
        const imageUrl = await getImageUrl(
          storage,
          `meimoreis/user/${data.userData.profilePicture}`
        );
        setImageUrl(imageUrl);
      }
    };

    fetchData();
  }, [navigate]);

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
          <CardsComponents />
          <CardsComponents />
          <CardsComponents />
        </div>
      )}
    </>
  );
};

export default HomePage;
