"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

const UserLoginForm = () => {
    const router = useRouter();

    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        let records = { email, password };

        let data = await fetch("http://localhost:3000/api/user/login", {
            method: "POST", headers:{  "Content-Type" : "application/json" },    body: JSON.stringify(records) });

        let res = await data.json()

      if(res.success){
        router.push("/")
      }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}method="POST">
                <div className="flex flex-col mb-3">
                    <label htmlFor="username" className="text-cyan-800 text-2xl font-serif">Username</label>
                    <input type="text" value={email} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Email as Username" id="username" className="border w-full p-2 border-teal-400 rounded-xl" />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="password" className="text-cyan-800 text-2xl font-serif">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" id="password" className="border w-full p-2  border-teal-400 rounded-xl" />
                </div>
                <div className="flex  bg-green-500 py-2 rounded-md item-center justify-center border border-red-600 mb-4">
                    <button type="submit"  className="text-white text-2xl font-serif">Login</button>
                </div>
                <div className="signup flex bg-gradient-to-r from-black via-red-500 to-black p-2  rounded-lg justify-center text-white ">
                    <Link href="/User/register" >Sign Up / Register</Link>
                </div>
            </form></div>
    )
}

export default UserLoginForm