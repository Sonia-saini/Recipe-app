import { useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";

function Authentication({ children }) {
  const toast = useToast();
  let auth = JSON.parse(sessionStorage.getItem("token")) || "";
  console.log(auth, "auth");
  if (auth) {
    return children;
  } else {
    toast({
      title: `Please Login First`,
      status: "warning",
      isClosable: true,
    });
    return <Navigate to="/login" />;
  }
}

export default Authentication;
