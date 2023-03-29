import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./components/category/Category";
import { Header, SideBar } from "./layout";

const App = () => {
  return (
    <>
      <Header />

      <div className="main-container" id="container">
        <div className="overlay" />
        <div className="search-overlay" />

        <SideBar />

        <div id="content" className="main-content">
          <Routes>
            {/* Departments Paths */}
            <Route path="department/add" element={<Category />} />

            {/* Reports Paths */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
