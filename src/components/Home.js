import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";

import {Button} from '@chakra-ui/react';
import {useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
    const signoutProcess=()=>{
         signOut(auth).then(() => {
          navigate("/")
}).catch((error) => {
console.log("error");
});

    }
   
  return (
    <div>
         <Button
          mt={6}
          colorScheme="blue"
          size="lg"
          width="fit-content" onClick={signoutProcess}
        >
     sign-out
        </Button>
    </div>
  )
}

export default Home