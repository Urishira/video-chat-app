import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { RouterApp } from "./routes/RouterApp";

function App() {
  return (
    <ChakraProvider resetCSS >
      <RouterApp />
    </ChakraProvider>
  );
}

export default App;
