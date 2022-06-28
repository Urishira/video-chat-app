import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

type Props = ButtonProps;
export const CustomButton: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Button w="100%" colorScheme='purple' {...props}>
            {children}
        </Button>
    );
};
