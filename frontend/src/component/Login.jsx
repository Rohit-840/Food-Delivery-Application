import React, { useContext, useState } from 'react'
import { ChakraProvider, background } from '@chakra-ui/react'
import axios from "axios"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'


const Login = ({ setShowLogin }) => {

    const {url,setToken} =useContext(StoreContext);

    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event)=>{
        event.preventDefault()
        let newUrl = url;
        if(currState==='Login'){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data);
        if(response.data.success){
                setToken(response.data.token);
                localStorage.setItem("token",response.data.token)
                setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }


    const [input, setInput] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // const handleInputChange = (e) => { setInput(e.target.value) }
    // const handleNameChange = (e) => { setName(e.target.value) }
    // const handlePasswordChange = (e) => { setPassword(e.target.value) }

    const isErrorName = name === ''
    const isError = input === ''
    const isErrorPassword = password === ''



    return (
        <div className='absolute z-10 w-full h-screen flex justify-center ' style={{background: "#00000090"}}>
            <ChakraProvider>
                <form onSubmit={onLogin} className=' w-max self-center  bg-white gap-3 p-7 px-10 rounded-lg text-lg flex flex-col' style={{color:"#808080", animation: "fadeIn 0.5s"}}>
                <div className='flex justify-between'>
                    <h2 className='text-2xl font-bold'>{currState}</h2>
                    <div><img className=' w-4' onClick={()=>setShowLogin(false)} src={assets.close}/></div>
                </div>
                    <div>

                    {currState==="Login"?<></>:

                        <FormControl isInvalid={isErrorName}>
                            <FormLabel>Name</FormLabel>
                            <Input type='text' name='name' value={data.name} onChange={onChangeHandler} />
                            {!isErrorName ? (
                                <FormHelperText>
                                  
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Name is required.</FormErrorMessage>
                            )}
                        </FormControl>}


                        <FormControl isInvalid={isError}>
                            <FormLabel>Email</FormLabel>
                            <Input name='email' type='email' value={data.email} onChange={onChangeHandler} />
                            {!isError ? (
                                <FormHelperText>
                                  
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>



                        <FormControl isInvalid={isErrorPassword}>
                            <FormLabel>Password</FormLabel>
                            <Input name='password' type='password' value={data.password} onChange={onChangeHandler} />
                            {!isErrorPassword ? (
                                <FormHelperText>
                                   
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>password is required.</FormErrorMessage>
                            )}
                        </FormControl>

                    </div>
                    <Button type='submit' colorScheme='blue'>{currState==="Sign Up"?"Create account":"Login"}</Button>
                    <div className='flex gap-2 text-s'>
                        <input type='checkbox' required/>
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                    {currState==="Login"?<p>Create a new account? <span className=' text-blue-500 cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>: 
                    <p>Already have an account? <span className=' text-blue-500 cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>}
                </form>
            </ChakraProvider>
        </div>
    )
}

export default Login
