"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Links = [
  JSON.parse(sessionStorage.getItem("loginuser"))?.email
    ? { name: JSON.parse(sessionStorage.getItem("loginuser"))?.email, page: "" }
    : { name: "Login", page: "/login" },
  !JSON.parse(sessionStorage.getItem("loginuser"))?.email && {
    name: "Register",
    page: "/register",
  },
 
  { name: "Favourite recipe", page: "/favouriterecipe" },
  { name: "Search Recipe", page: "/" },
   JSON.parse(sessionStorage.getItem("loginuser"))?.email &&{ name:"Logout"}

];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
console.log(JSON.parse(sessionStorage.getItem("loginuser")))
const logout=()=>{
    console.log("logout")
    sessionStorage.removeItem("loginuser")
    sessionStorage.removeItem("token")
    return window.location.reload()
}
  return (
    <>
      <Box px={4} bg="black">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            fontWeight={"extrabold"}
            color={"white"}
          >
            <Link to={"/"}>
              <Box fontWeight={"extrabold"}>Home</Box>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
 link?.name==="Logout"?                  <Button
onClick={logout}
    key={link?.name}
    _hover={{ color: "gray" }}
    bg={"black"}
    color={"white"}
  >
    {link?.name}
  </Button>    :   <Link to={link?.page}>
                {" "}
                <Button
                key={link?.name}
                _hover={{ color: "gray" }}
                bg={"black"}
                color={"white"}
                >
                {link?.name}
                </Button>
            </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} fontWeight={"extrabold"}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link to={link?.page}>
                  {" "}
                  <Button
                    key={link?.name}
                    _hover={{ color: "gray" }}
                    bg={"black"}
                    color={"white"}
                  >
                    {link.name === "Login" &&
                    JSON.parse(sessionStorage.getItem("loginuser")).email
                      ? JSON.parse(sessionStorage.getItem("loginuser")).email
                      : link?.name}
                  </Button>
                {  link.name==="Logout"&&                  <Button
                onClick={logout}
                    key={link?.name}
                    _hover={{ color: "gray" }}
                    bg={"black"}
                    color={"white"}
                  >
                    {link?.name}
                  </Button>}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
