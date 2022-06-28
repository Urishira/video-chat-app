import { Input, InputProps } from "@chakra-ui/react";
import React from "react";

type Props = InputProps;

export const CustomInput: React.FC<Props> = ({ children, ...props }) => {
    return <Input w='100%' h='100%' {...props} />;
};
