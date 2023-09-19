import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import RecipeDetailPage from "../Pages/RecipeDetailPage";
import FavouriteRecipePage from "../Pages/FavouriteRecipePage";
import SearchRecipe from "../Pages/SearchRecipe";
import Authentication from "../Components/Authentication";

function Allroutes() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Authentication>
              <SearchRecipe />
            </Authentication>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/detailedrecipe/:id"
          element={
            <Authentication>
              <RecipeDetailPage />
            </Authentication>
          }
        />
        <Route
          path="/favouriterecipe"
          element={
            <Authentication>
              <FavouriteRecipePage />
            </Authentication>
          }
        />
      </Routes>
    </>
  );
}

export default Allroutes;
