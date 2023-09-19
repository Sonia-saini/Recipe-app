import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetailPage() {
  const [recipe, setRecipe] = useState({});
  const [count, setCount] = useState(0);
  const toast = useToast();
  const favouriterecipe =
    JSON.parse(localStorage.getItem("favouriterecipe")) || [];
  const { id } = useParams();
  useEffect(() => {
    getrecipe();
  }, [id]);
  const getrecipe = () => {
    fetch(`https://salmon-moose-slip.cyclic.cloud/getdetailedrecipe/${id}`, {
      method: "GET",
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((res) => (console.log(res), setRecipe(res?.recipe)))
      .catch((err) => console.log(err));
  };
  const addtofavourite = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      let match = favouriterecipe?.filter((el) => el.id === recipe.id);
      if (!match) {
        return toast({
          title: `Recipe Already in Favourite list`,
          status: "warning",
          isClosable: true,
        });
      } else {
        favouriterecipe.push(recipe);
        localStorage.setItem(
          "favouriterecipe",
          JSON.stringify(favouriterecipe)
        );
        return toast({
          title: `Recipe added in Favourite recipe list`,
          status: "success",
          isClosable: true,
        });
      }
    } else {
      let removed = favouriterecipe.filter((el) => el.id !== recipe.id);
      localStorage.setItem("favouriterecipe", JSON.stringify(removed));

      return toast({
        title: `Recipe Removed from Favourite list`,
        status: "success",
        isClosable: true,
      });
    }
  };

  return (
    <>
      {" "}
      <Box border={"2px solid"} p="10px" width={"95%"} m="auto" mt={"10"}>
        <Heading>{recipe?.title}</Heading>
        <Button
          bg="black"
          color="white"
          mt="10px"
          display={"block"}
          onClick={addtofavourite}
          justifySelf={"flex-end"}
          _hover={{ color: "black", border: "2px solid black", bg: "white" }}
        >
          {count % 2 === 0 ? "Add to Favourite" : "Remove from Favourite"}
        </Button>

        <Image src={recipe?.image} w="-webkit-fit-content" m="auto" />
        <Box textAlign={"justify"}>
          {" "}
          <Heading>Intstrunctions :- </Heading>{" "}
          {recipe &&
            recipe?.analyzedInstructions?.map((y) =>
              y.steps.map((el) => (
                <Box>
                  <Text>
                    Step {el.number} :- {el.step}
                  </Text>
                </Box>
              ))
            )}
        </Box>
        <Heading mt={"15px"}> Nutrients Details</Heading>
        <TableContainer mt={"15px"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Nutrients Name</Th>
                <Th>Amount</Th>
                <Th>Unit</Th>
                <Th>percentOfDailyNeeds</Th>
              </Tr>
            </Thead>
            <Tbody>
              {recipe.nutrition?.nutrients.map((x) => (
                <Tr>
                  <Td>{x.name}</Td>
                  <Td>{x.amount}</Td>
                  <Td>{x.unit}</Td>
                  <Td>{x.percentOfDailyNeeds}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Heading mt={"15px"}>Ingredients Details</Heading>
        <TableContainer mt={"15px"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Ingredients Name</Th>
                <Th>Amount</Th>
                <Th>Unit</Th>
              </Tr>
            </Thead>
            <Tbody>
              {recipe.nutrition?.ingredients.map((x) => (
                <Tr>
                  <Td>{x.name}</Td>
                  <Td>{x.amount}</Td>
                  <Td>{x.unit}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default RecipeDetailPage;
