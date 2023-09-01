import React, { useState, useRef, useEffect } from "react";
import { valid } from "../utils/valid";
import { auth } from "../utils/firebase";
import {
  Box,
  Button,
  Input,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

import { provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [signForm, setSignForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const click = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const btnClick = () => {
    const msg = valid(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg) return;
    if (!signForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/Home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "--" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log("working");
          navigate("/Home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "--" + errorMessage);
        });
    }
  };

  const toggleBtn = () => {
    setSignForm(!signForm);
  };

  return (
    <Container maxW="md" centerContent mt={10}>
      <Box p={8} boxShadow="md" rounded="lg" bg="white">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          {signForm ? "Sign In" : "Sign Up"}
        </Text>
        <Divider my={4} />

        {!signForm && (
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="Full Name" />
          </FormControl>
        )}

        <FormControl mt={4}>
          <FormLabel>Email Address</FormLabel>
          <Input ref={email} type="email" placeholder="Email Address" />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input ref={password} type="password" placeholder="Password" />
        </FormControl>

        <Text color="red.500" mt={2} fontWeight="semibold">
          {errorMsg}
        </Text>

        <Button
          mt={6}
          colorScheme="blue"
          size="lg"
          width="full"
          onClick={btnClick}
        >
          {signForm ? "Sign In" : "Sign Up"}
        </Button>

        <Divider my={6} />
        {value ? (
          <Home />
        ) : (
          signForm && <Button onClick={click}>Sign in through Google</Button>
        )}
        <Text
          mt={4}
          textAlign="center"
          cursor="pointer"
          color="blue.400"
          onClick={toggleBtn}
        >
          {signForm ? "New? Sign Up Now" : "Already have an account? Sign In"}
        </Text>
      </Box>
    </Container>
  );
};

export default Login;
