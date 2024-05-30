import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/home_components/NavBarComponent";
import CardsComponents from "../components/home_components/CardsComponents";
import AddMemoryButton from "../components/home_components/AddMemoryButton";
import { getUserDataFromLocalStorage } from "../util/localStorageUtils.js";

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = getUserDataFromLocalStorage();
      if (!data) {
        navigate("/login");
      } else {
        setLoading(false);
        setData(data);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "block",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Nav name={`${data.userData.fName} ${data.userData.lName} `} />
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
