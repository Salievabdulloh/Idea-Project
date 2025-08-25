'use client'
import { useGetStore } from '@/store/store'
import React, { useEffect } from 'react'

const Dashboard = () => {
  let { getData, fullUsers } = useGetStore()

  useEffect(() => { getData() }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Registered Users</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fullUsers.map(user => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-gray-400">
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt={user.personal.firstName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xl">👤</span>
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{user.personal.firstName}</h2>
                <p className="text-sm text-gray-500">{user.personal.email}</p>
              </div>
            </div>

            {user.skills?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {user.bio && (
              <p className="text-sm text-gray-600 line-clamp-3">
                {user.bio}
              </p>
            )}

            <div className="text-sm text-gray-500 mt-auto">
              <p>📍 {user.personal.location || "Unknown"}</p>
              <p>📞 {user.personal.phone || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
