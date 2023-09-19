import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import SingleRecipe from "../Components/SingleRecipe";

function FavouriteRecipePage() {
  let data = JSON.parse(localStorage.getItem("favouriterecipe")) || [];
  return (
    <>
      {" "}
      {data.length > 0 ? (
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          gap="10px"
          w="95%"
          m="auto"
          mt={"100px"}
        >
          {data?.length > 0 && data?.map((el) => <SingleRecipe {...el} />)}
        </SimpleGrid>
      ) : (
        <Text fontWeight={"extrabold"}>No Favourite Recipe</Text>
      )}
    </>
  );
}

export default FavouriteRecipePage;
