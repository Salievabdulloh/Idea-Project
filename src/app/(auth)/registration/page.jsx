'use client'

import { useGetStore } from '@/store/store'
import { Eye } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Registration = () => {
  let { getUsers, users, registration } = useGetStore()
  let [openEye, setopenEye] = useState(false)
  let [openEye2, setopenEye2] = useState(false)

  let {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: ""
    }
  })

  let password = watch('password')
  let password2 = watch('confirmPassword')

  const search = useSearchParams()
  const role = search.get('type')
  const router = useRouter()

  async function onSubmit(data) {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    let name = users.map(e => e.firstName)

    for (let i = 0; i <= name.length; i++) {
      if (name[i] == data.firstName) {
        alert("This name is already taken!")
        return
      }
    }
    await registration({ ...data, type: role })

    if (role === 'jobseeker') {
      router.push("/profile")
    } else {
      router.push("/dashboard")
    }
  }


  useEffect(() => { getUsers() }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Create <span className="text-blue-600">Account</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              {...register("firstName", { required: true })}
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.firstName && <p className="text-red-500 text-sm">First name is required</p>}
          </div>
          <div>
            <input
              type="number"
              {...register("age", { required: true })}
              placeholder="Age"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.age && <p className="text-red-500 text-sm">Age is required</p>}
          </div>
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
            <span className='top-2 right-3 absolute' onClick={() => setopenEye(!openEye)}>{password ? <Eye /> : ""}</span>
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>
          <div className='relative'>
            <input
              type={`${openEye2 ? "text" : "password"}`}
              {...register("confirmPassword", { required: true })}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <span className='top-2 right-3 absolute' onClick={() => setopenEye2(!openEye2)}>{password2 ? <Eye /> : ""}</span>
            {errors.confirmPassword && <p className="text-red-500 text-sm">Confirm Password is required</p>}
          </div>
          <input
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          />
        </form>
      </div>
    </div>
  )
}

export default Registration