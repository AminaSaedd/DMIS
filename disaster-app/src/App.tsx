import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./components/category/Category";
import NewCategory from "./components/category/NewCategory";
import AddDisaster from "./components/disaster/AddDisaster";
import DisastersList from "./components/disaster/DisastersList";
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
            <Route path="category/Category" element={<Category />} />
            <Route path="category/NewCategory" element={<NewCategory />} />
            <Route path="disaster/AddDisaster" element={<AddDisaster />} />
            <Route path="disaster/DisastersList" element={<DisastersList />} />

            {/* Reports Paths */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
