import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import RecipeDetailPage from '../Pages/RecipeDetailPage'
import FavouriteRecipePage from '../Pages/FavouriteRecipePage'
import SearchRecipe from '../Pages/SearchRecipe'

function Allroutes() {
  return (
    <><Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<SearchRecipe/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/detailedrecipe/:id" element={<RecipeDetailPage/>}/>
        <Route path="/favouriterecipe" element={<FavouriteRecipePage/>}/>

        </Routes></>
  )
}

export default Allroutes