"use client"

import {useState, useCallback} from 'react'
import Input from '@/components/input'
import axios from "axios"
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

export default function Home() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => 
        {setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
    }, []);

    const login = useCallback(async () => {
        try{
            await signIn("credentials", {
                email, password, callbackUrl: "/profiles"
            })
        }catch(err) {
            console.log(err);
        }
    }, [email, password])

    const register = useCallback(async () => {
        try{
            await axios.post("https://xcmd.nl/api/register",{
                email,name,password
            });
            login()
        }catch(err) {
            console.log(err);
        }
    }, [email, name, password, login])

    return (
        
        <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
            {/* background */}
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                {/* logo */}
                <nav className='px-12 py-5 opacity-100'> <img src="/images/logo.png" alt="logo" className='h-12 opacity-100'/></nav>
                {/* hero */}
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-80 px-16 py-16 self-center mt-2 lg:h-2/5 lg:max-w-md rounded-md w-full ">
                        <h2 className='text-white text-4xl mb-8 font-semibold'>{variant === "login" ? "Sign in" : "Register"}</h2>
                        <div className="flex flex-col gap-4">
                            {variant === "register" && (
                                <Input label='Username' id="username" value={name} onChange={(ev:any) => setName(ev.target.value)}/>
                            )}
                            <Input label='Email' id="email" type='email' value={email} onChange={(ev:any) => setEmail(ev.target.value)}/>
                            <Input label='Password' id="password" type='password' value={password} onChange={(ev:any) => setPassword(ev.target.value)}/>
                        </div>
                        <button onClick={variant == "login" ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                            {variant == "login" ? "Login" : "Sign up"}
                        </button>
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition" onClick={() => signIn("google", {callbackUrl: "https://xcmd.nl/profiles"})}>
                                <FcGoogle size={30}/>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition" onClick={() => signIn("github", {callbackUrl: "https://xcmd.nl/profiles"})}>
                                <FaGithub size={30}/>
                            </div>
                        </div>
                        <p className='text-neutral-500 mt-12'>
                            {variant === "login" ? "First time using Netflix?" : "Already have and account?"}
                            <span className='text-white ml-2 hover:underline cursor-pointer select-none' onClick={toggleVariant}>
                                {variant === "login" ? "Create account" : "Login"}
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </div>

    )
}
