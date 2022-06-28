import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages";

export const RouterApp = () => {
    return (
        <BrowserRouter>
            <Center>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </Center>
        </BrowserRouter>
    );
};
