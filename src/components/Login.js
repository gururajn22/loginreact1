
// const Login = () => {
//   const[signForm,setSignFrom]=useState(true);
//  const[errorMsg,setErrorMsg]=useState(null);
//   // const fullName=useRef(null);
//   const email=useRef(null);
//   const password=useRef(null);
 
//   const btnClick=()=>{
//   const msg=valid(email.current.value,password.current.value);
//   setErrorMsg(msg);
//   }
//    const togglebtn=()=>{
//     setSignFrom(!signForm);
//   }
//   return (
//     <Container maxW="xl" centerContent>
//       <Box
//         d="flex"
//         justifyContent="center"
//         alignItems="center"
//         p={3}
//         bg="white"
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="lg"
//         borderWidth="1px"
//       >
//         <Text d="flex" textAlign="center" fontSize="2xl">
//          {signForm ? "Sign In" : "Sign Up"}
//         </Text>
//       </Box>
//       <Box>
//         <form onSubmit={(e)=>{
//               e.preventDefault();
//         }}> 
//           {!signForm && <FormControl>
//             <FormLabel>Full Name</FormLabel>
//             <Input  type='text' placeholder='Full Name' size="lg"/>
//           </FormControl>
// }
//           <FormControl>
//             <FormLabel>Email Address</FormLabel>
//             <Input   ref={email} type="email" placeholder="Email Address" size="lg" />
//           </FormControl>
//           <FormControl mt={4}>
//             <FormLabel>Password</FormLabel>
//             <Input  ref={password} type="password" placeholder="Password" size="lg" />
//           </FormControl>
//           <Text color="red.500" mt={5} fontWeight="bold">{errorMsg}</Text>
//           <Button mt={6} colorScheme="blue" size="lg" width="full" onClick={btnClick}>
//          {signForm ? "Sign In" : "Sign Up"}
//           </Button>
//           <GoogleButton/>
//        <Text mt={4} textAlign="center" cursor="pointer" color="blue.400" onClick={togglebtn}>New? Sign Up Now</Text>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Login;
import React, { useState,useRef } from 'react';
import GoogleButton from 'react-google-button';
import {valid} from "../utils/valid";
import {auth} from "../utils/firebase";
import { Box, Button, Input, Container, Divider,FormControl, FormLabel, Text } from '@chakra-ui/react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [signForm, setSignForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
const navigate=useNavigate();
  const btnClick = () => {
    const msg = valid(email.current.value, password.current.value);
    setErrorMsg(msg);
    if(msg) return;
    if(!signForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/Home");
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
setErrorMsg(errorCode+"--"+errorMessage);
  });
    }
    else{
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
   console.log(user);
   console.log("working");
   navigate("/Home");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+"--"+errorMessage);
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
          {signForm ? 'Sign In' : 'Sign Up'}
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
          {signForm ? 'Sign In' : 'Sign Up'}
        </Button>

        <Divider my={6} />

        <GoogleButton />

        <Text mt={4} textAlign="center" cursor="pointer" color="blue.400" onClick={toggleBtn}>
          {signForm ? 'New? Sign Up Now' : 'Already have an account? Sign In'}
        </Text>
      </Box>
    </Container>
  );
};

export default Login;
