import React from "react";
import { Formik, FormikConfig, useFormik } from "formik";
import {
    HStack,
    Input,
    VStack,
    Text,
    ButtonGroup,
    Heading,
    Image,
} from "@chakra-ui/react";
import { CustomButton } from "../../components/ui";
import { signInWithgooglePopup } from "../../service/firebase/auth";

type InputFormValue = {
    email: string;
    password: string;
};
export const Login: React.FC = () => {
    const FormikInitialValue: InputFormValue = {
        email: "",
        password: "",
    };

    const formik = useFormik({
        initialValues: FormikInitialValue,
        onSubmit: (value) => {
            console.log(value);
        },
    });
    const handleClick = () => {
        signInWithgooglePopup()
            .then((res) => console.log(res))
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <HStack
            w="100%"
            h="100%"
            direction="row"
            m="20px"
            alignSelf="center"
            justifyContent="center"
        >
            <VStack
                w="100%"
                h="100%"
                maxW={["800px"]}
                maxH={["950px"]}
                py="90px"
                px="110px"
                gap="10px"
                alignItems="center"
                justifyItems="center"
            >
                <Heading>Welcome Back</Heading>
                <Text> Login into your account</Text>
                <ButtonGroup w="100%" h="100%" gap="20px">
                    <CustomButton onClick={() => handleClick}>Google</CustomButton>
                    <CustomButton>Facebook</CustomButton>
                </ButtonGroup>
                <Text>Or continue with</Text>
                <form
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                    }}
                    onSubmit={formik.handleSubmit}
                >
                    <Input
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <Input
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <CustomButton type="submit" h={["55px"]} colorScheme="purple">
                        Login
                    </CustomButton>
                </form>
            </VStack>
            <Image
                w="50%"
                h="50%"
                src="https://images.unsplash.com/photo-1542995470-870e12e7e14f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
        </HStack>
    );
};
