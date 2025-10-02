'use client'

import { useGetStore } from '@/store/store'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    let { getUsers, users, login } = useGetStore()
    let [openEye, setopenEye] = useState(false)

    let {
        register,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    })

    let password = watch('password')

    const router = useRouter()

    async function onSubmit(data) {
        const findUser = users.find(e => e.email === data.email)

        if (!findUser) {
            alert("Please enter correct email")
            return
        }

        if (findUser.password !== data.password) {
            alert("Please enter correct password")
            return
        }

        const token = findUser.token
        console.log(token)
        localStorage.setItem("access_token", token)

        if (!token) {
            alert("Please get your token")
            return
        } else {
            await login(data)
            if (findUser.type === 'jobseeker') {
                router.push("/profile")
            } else {
                router.push("/dashboard")
            }
        }
    }


    useEffect(() => { getUsers() }, [])

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            const currentUser = users.find(u => u.token === token);
            if (currentUser) {
                console.log("Welcome back", currentUser.firstName);
            }
        }
    }, [users]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
                    <span className="text-blue-600">Sign In</span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                    </div>
                    <div className='relative'>
                        <input
                            type={`${openEye ? "text" : "password"}`}
                            {...register("password", {
                                required: true,
                                minLength: {
                                    value: 4,
                                    message: "Password should be longer"
                                }
                            })}
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                        <span className='top-2 right-3 absolute cursor-pointer' onClick={() => setopenEye(!openEye)}>{password ? <Eye /> : ""}</span>
                        {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
                    </div>
                    <input
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                    />
                    <p className="mt-3 text-center text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/registration"
                            className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition"
                        >
                            Registration
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login