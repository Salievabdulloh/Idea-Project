'use client'
import { useGetStore } from "@/store/store"
import { Button, Input } from "antd"
import Image from "next/image"
import { useEffect, useState } from "react"

// import React, { useEffect, useState } from 'react'
// import { useForm, useFieldArray, get } from 'react-hook-form'
// import { useGetStore } from '@/store/store'
// import { useRouter } from 'next/navigation'

// const toBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => resolve(reader.result)
//     reader.onerror = (error) => reject(error)
//   })
// }

// const Profile = () => {
//   const router = useRouter()
//   const { fullRegistration, getData } = useGetStore()

//   const [loading, setLoading] = useState(true)
//   const [user, setUser] = useState(null)

//   const getToken = localStorage.getItem('access_token')
//   if (!getToken) {
//     router.push('/registration')
//   }

//   const { control, handleSubmit, register, reset, setValue, watch } = useForm({
//     defaultValues: {
//       personal: { firstName: '', email: '', age: '', phone: '', location: '' },
//       skills: [''],
//       experience: [{ company: '', role: '', years: '', description: '' }],
//       education: [{ school: '', degree: '', years: '' }],
//       bio: '',
//       profilePic: null,
//     },
//   })

//   const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({
//     control, name: 'experience',
//   })
//   const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({
//     control, name: 'education',
//   })
//   const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
//     control, name: 'skills',
//   })

//   useEffect(() => {
//     (async () => {
//       const data = await getData()
//       const myProfile = data && data.length > 0 ? data[0] : null
//       setUser(myProfile)

//       if (myProfile) {
//         reset({
//           personal: myProfile?.personal || { firstName: '', email: '', age: '', phone: '', location: '' },
//           skills: myProfile?.skills?.length ? myProfile.skills : [''],
//           experience: myProfile?.experience?.length ? myProfile.experience : [{ company: '', role: '', years: '', description: '' }],
//           education: myProfile?.education?.length ? myProfile.education : [{ school: '', degree: '', years: '' }],
//           bio: myProfile?.bio || '',
//           profilePic: myProfile?.profilePic || null,
//         })
//       }

//       setLoading(false)
//     })()
//   }, [getData, reset])

//   const onSubmit = async (data) => {
//     await fullRegistration(data)
//     router.push('/dashboard')
//   }

//   if (loading) return <p className="p-6">Loading...</p>

//   const profilePic = watch("profilePic")

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-8">
//       <header className="w-full bg-white shadow-md py-4 px-8 text-2xl font-bold text-gray-800">
//         My Profile
//       </header>
//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full max-w-6xl mx-auto">

//         <div className="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-lg shadow">
//           <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
//             {profilePic ? (
//               profilePic instanceof File ? (
//                 <img
//                   src={URL.createObjectURL(profilePic)}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               ) : (
//                 <img
//                   src={profilePic}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               )
//             ) : (
//               <span className="text-gray-400">👤</span>
//             )}
//           </div>
//           <div className="flex-1 flex flex-col gap-2">
//             <label className="font-semibold">Upload Profile Picture</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setValue("profilePic", e.target?.files[0])}
//             />
//           </div>
//         </div>

//         <section className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
//           <h2 className="text-xl font-semibold">Personal Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <input type="text" {...register('personal.firstName')} placeholder="First Name" className="p-3 border rounded" />
//             <input type="email" {...register('personal.email')} placeholder="Email" className="p-3 border rounded" />
//             <input type="number" {...register('personal.age')} placeholder="Age" className="p-3 border rounded" />
//             <input type="text" {...register('personal.phone')} placeholder="Phone" className="p-3 border rounded" />
//             <input type="text" {...register('personal.location')} placeholder="Location" className="p-3 border rounded" />
//           </div>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
//           <h2 className="text-xl font-semibold">Skills</h2>
//           <div className="flex flex-wrap gap-2">
//             {skillFields.map((field, index) => (
//               <div key={field.id} className="flex gap-2">
//                 <input {...register(`skills.${index}`)} placeholder="Skill" className="p-2 border rounded" />
//                 <button type="button" onClick={() => removeSkill(index)} className="text-red-500">X</button>
//               </div>
//             ))}
//           </div>
//           <button type="button" onClick={() => appendSkill('')} className="mt-2 text-blue-600 font-semibold">+ Add Skill</button>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
//           <h2 className="text-xl font-semibold">Experience</h2>
//           {expFields.map((field, index) => (
//             <div key={field.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
//               <input {...register(`experience.${index}.company`)} placeholder="Company" className="p-2 border rounded" />
//               <input {...register(`experience.${index}.role`)} placeholder="Role" className="p-2 border rounded" />
//               <input {...register(`experience.${index}.years`)} placeholder="Years" className="p-2 border rounded" />
//               <input {...register(`experience.${index}.description`)} placeholder="Description" className="p-2 border rounded" />
//               <button type="button" onClick={() => removeExp(index)} className="text-red-500">Remove</button>
//             </div>
//           ))}
//           <button type="button" onClick={() => appendExp({ company: '', role: '', years: '', description: '' })} className="mt-2 text-blue-600 font-semibold">+ Add Experience</button>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
//           <h2 className="text-xl font-semibold">Education</h2>
//           {eduFields.map((field, i) => (
//             <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
//               <input {...register(`education.${i}.school`)} placeholder="School" className="p-2 border rounded" />
//               <input {...register(`education.${i}.degree`)} placeholder="Degree" className="p-2 border rounded" />
//               <input {...register(`education.${i}.years`)} placeholder="Years" className="p-2 border rounded" />
//               <button type="button" onClick={() => removeEdu(i)} className="text-red-500">Remove</button>
//             </div>
//           ))}
//           <button type="button" onClick={() => appendEdu({ school: '', degree: '', years: '' })} className="mt-2 text-blue-600 font-semibold">+ Add Education</button>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
//           <h2 className="text-xl font-semibold">About Me</h2>
//           <textarea {...register('bio')} placeholder="Write something about yourself..." className="w-full p-3 border rounded h-32"></textarea>
//         </section>

//         <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
//           Save Profile
//         </button>

//       </form>
//     </div>
//   )
// }

// export default Profile

const Profile = () => {
  const { getUsers, users, editUsers } = useGetStore()

  const [addImage, setAddImage] = useState(null)
  const [image, setImage] = useState(null)
  const [editname, seteditname] = useState(null)

  function changeImage(e) {
    let file = e.target?.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = (ev) => {
      const res = ev.target.result
      setImage(res)
      setAddImage(res)
    }

    reader.readAsDataURL(file)
  }

  async function postUsers(e) {
    let editUser = {
      ...e,
      image: addImage,
    }
    await editUsers(editUser)
  }

  const getToken = localStorage.getItem('access_token')

  const getUser = users?.find(e => e?.token === getToken)

  useEffect(() => { getUsers() }, [])

  return (
    <div>
      <div className="mt-[100px]">
        <input type="file" onChange={changeImage} />
        {image ? (
          <Image src={image} alt="profile picture" width={200} height={200} className="w-[200px] shadow-md object-cover h-[200px] rounded-full" />
        ) : (
          <Image src={getUser?.img} alt="profile picture" width={200} height={200} className="w-[200px] shadow-md object-cover h-[200px] rounded-full" />
        )}
        <Button onClick={() => postUsers(getUser)}>Ok</Button>
        <Input type="text" value={getUser?.firstName} onChange={(e) => seteditname(e.target.value)} />
        <Input type="text" value={getUser?.age} />
        <Input type="text" value={getUser?.email} />
      </div>
    </div>
  )
}

export default Profile