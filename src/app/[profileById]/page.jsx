'use client'
import { useGetStore } from '@/store/store'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const ProfileById = () => {
  const { profileById } = useParams()
  const { getData, fullUsers } = useGetStore()

  useEffect(() => { getData() }, [getData])

  // find the user by id
  const data = fullUsers.find(e => e.id === profileById)
  const person = data?.personal

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400 text-xl">
        Loading profile...
      </div>
    )
  }

  return (
    <div
      className="flex flex-col bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 m-10 rounded-xl md:flex-row gap-8 p-8 max-w-5xl mx-auto"
    >
      <div>
        {data?.img ? (
          <Image
            src={data.img}
            alt={`${person?.firstName}'s profile`}
            width={300}
            height={400}
            className="rounded-xl object-cover"
          />
        ) : (
          <User className="w-[300px] h-[400px] text-white" />
        )}
      </div>
      <div className="flex-1 space-y-6">
        {person?.email == '' || person?.location == '' || person?.phone == '' ? (
          <Link href='/profile' className='text-blue-300 underline'>Go to the profile</Link>
        ) : ('')}
        <h1 className="text-3xl font-bold text-white">
          {person?.firstName}
        </h1>
        <div className="space-y-2 text-white">
          <p><span className="font-semibold">Email:</span> {person?.email ? person?.email : "none"}</p>
          <p><span className="font-semibold">Phone:</span> {person?.phone ? person?.phone : "none"}</p>
          <p><span className="font-semibold">Location:</span> {person?.location ? person?.location : "none"}</p>
          <p><span className="font-semibold">Age:</span> {person?.age ? person?.age : "none"}</p>
        </div>
        {data.skills?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Skills</h2>
            <ul className="list-disc list-inside text-white">
              {data.skills.map(e => e == '' ?
                <p>Skills: none</p>
                : <li>{e}</li>
              )}
            </ul>
          </div>
        )}

        {data.bio && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Bio</h2>
            <p className="text-gray-300">{data.bio}</p>
          </div>
        )}
      </div>
    </div >
  )
}

export default ProfileById
