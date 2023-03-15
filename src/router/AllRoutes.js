import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import NotFound from "../views/NotFound";
import HomeDark from "../views/all-home-version/HomeDark";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeDark />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
