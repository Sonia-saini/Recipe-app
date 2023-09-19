import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SingleRecipe from "../Components/SingleRecipe";

function SearchRecipe() {
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [sortCategory, setSortCategory] = useState("");
  const [sortorder, setSortorder] = useState("");
  useEffect(() => {
    getrecipe();
  }, [page, query, sortCategory && sortorder]);
  const getrecipe = () => {
    setData(true);
    fetch(
      `https://salmon-moose-slip.cyclic.cloud/getrecipe?query=${query}&page=${page}&limit=${10}&sortby=${sortCategory}&sort=${sortorder}`,
      {
        method: "GET",
        headers: {
          Authorization: JSON.parse(sessionStorage.getItem("token")),
        },
      }
    )
      .then((res) => res.json())
      .then(
        (res) => (console.log(res), setData(res?.recipes), setLoader(false))
      )
      .catch((err) => console.log(err));
  };
  const pagination = (page) => {
    setPage(page);
  };
  return (
    <Box>
      <Input
        placeholder="Search Recipe"
        w={{ base: "80%", xl: "40%", sm: "80%" }}
        border={"2px solid black"}
        mt="100px"
        borderRadius={"20px"}
        onChange={(e) => setQuery(e.target.value)}
      ></Input>
      <SimpleGrid width={"90%"} columns={[1, 1, 2, 2]} m="auto" mt="5px">
        <Select
          placeholder="Select Sort category"
          w="-webkit-fit-content"
          border={"1px solid black"}
          m="auto"
          onChange={(e) => setSortCategory(e.target.value)}
        >
          <option value="popularity">Popularity</option>
          <option value="healthiness">Healthiness</option>
          <option value="price">Price</option>
          <option value="calories">Calories</option>
          <option value="time">Time Consumes</option>
        </Select>
        <Select
          placeholder="Select Sort Order"
          w="-webkit-fit-content"
          border={"1px solid black"}
          m="auto"
          onChange={(e) => setSortorder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </SimpleGrid>

{  data.length>0?    <SimpleGrid
        columns={[1, 2, 3, 4]}
        gap="10px"
        w="95%"
        m="auto"
        mt={"15px"}
      >
        {data?.length > 0 && data?.map((el) => <SingleRecipe {...el} />)}
      </SimpleGrid>:<Text fontWeight="400">Recipe Not Found</Text>}

      {data !== undefined ? (
        <Box m="auto" w="100%" justifySelf={"space-evenly"} gap="-50px">
          <Button onClick={() => pagination(page - 1)} isDisabled={page === 1}>
            Prev
          </Button>
          <Button>{page}</Button>
          <Button onClick={() => pagination(page + 1)}>Next</Button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default SearchRecipe;
