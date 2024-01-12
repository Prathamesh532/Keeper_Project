import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import Notes from "./components/Notes";

const App = () => {
  return (
    <>
      <Header />
      <Notes />
      <Footer />
    </>
  );
};

export default App;
