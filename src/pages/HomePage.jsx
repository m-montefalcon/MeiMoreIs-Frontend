import React from "react";
import Nav from "../components/home_components/NavBarComponent";
import CardsComponents from "../components/home_components/CardsComponents";
import AddMemoryButton from "../components/home_components/AddMemoryButton";
const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "block",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Nav />
        <AddMemoryButton />
        <CardsComponents />
        <CardsComponents />
        <CardsComponents />
      </div>
    </>
  );
};

export default HomePage;
