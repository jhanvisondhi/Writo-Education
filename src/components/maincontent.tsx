import React from "react";

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow p-4">
      <section>
        <h1 className="text-2xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="mb-4">This is the main content of our website. Here you can find all the information you need.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Our Services</h2>
        <ul className="list-disc list-inside">
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;