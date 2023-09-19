import { Text, Image, Box, Heading } from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom"
function SingleRecipe({ title, summary, image,id }) {
  return (
    <>
      <Box border={"2px solid"} p="10px">
        <Heading>{title}</Heading>
        <Image src={image} w="-webkit-fit-content" m="auto" />
        <Text textAlign={"justify"}>{summary}</Text>
        <Link to={`/detailedrecipe/${id}`}><Text textAlign={"right"} color={"blue"}>View More Details</Text></Link>
      </Box>
    </>
  );
}

export default SingleRecipe;
