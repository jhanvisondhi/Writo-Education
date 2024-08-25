import React from "react";
import Header from "./Header";
import MainContent from "./maincontent";
import Footer from "./footer";

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default MyComponent;