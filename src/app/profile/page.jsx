'use client'
import { useGetStore } from "@/store/store"
import { Button, Input } from "antd"
import Image from "next/image"
import { useEffect, useState } from "react"

const Profile = () => {
  const { getUsers, users, editUsers } = useGetStore()

  const [image, setImage] = useState(null)
  const [editname, seteditname] = useState("")
  const [editphone, seteditphone] = useState("")
  const [editemail, seteditemail] = useState("")
  const [editage, seteditage] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [idx, setidx] = useState(null)

  const getToken = typeof window !== "undefined" ? localStorage.getItem("access_token") : null
  const getUser = users?.find(e => e?.token === getToken)

  useEffect(() => {
    if (getUser) {
      seteditname(getUser.firstName || "")
      seteditemail(getUser.email || "")
      seteditphone(getUser.phone || "")
      seteditage(getUser.age || "")
      setPassword(getUser.password || "")
      setConfirmPassword(getUser.confirmPassword || "")
      setidx(getUser.id || null)
      setImage(getUser.img || null)
    }
  }, [getUser])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  function changeImage(e) {
    let file = e.target?.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const res = ev.target.result
      setImage(res)
    }
    reader.readAsDataURL(file)
  }

  async function postUsers() {
    let editUser = {
      ...getUser,
      firstName: editname,
      email: editemail,
      age: editage,
      phone: editphone,
      password,
      confirmPassword,
      id: idx,
      img: image
    }
    await editUsers(idx, editUser)
  }

  if (!getUser) return <p className="p-6">Loading...</p>

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-8">
      <header className="w-full bg-white shadow-md py-4 px-8 text-2xl font-bold text-gray-800">
        My Profile
      </header>

      <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-lg shadow">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {image ? (
              <img src={image} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
            ) : (
              <span className="text-gray-400">👤</span>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-semibold">Upload Profile Picture</label>
            <input type="file" accept="image/*" onChange={changeImage} />
          </div>
        </div>

        <section className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input value={editname} onChange={(e) => seteditname(e.target.value)} placeholder="First Name" />
            <Input value={editemail} onChange={(e) => seteditemail(e.target.value)} placeholder="Email" />
            <Input value={editage} onChange={(e) => seteditage(e.target.value)} placeholder="Age" />
            <Input value={editphone} onChange={(e) => seteditphone(e.target.value)} placeholder="Phone" />
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <Input.Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
          </div>
        </section>

        <Button type="primary" onClick={postUsers} className="w-full py-3 text-lg">
          Save Profile
        </Button>
      </div>
    </div>
  )
}

export default Profile