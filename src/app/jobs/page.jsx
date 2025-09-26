'use client'
import { useGetStore } from '@/store/store'
import React, { useEffect, useState } from 'react'

const Jobs = () => {
  const { getJobs, getJobsUsers, loading, error } = useGetStore()

  const [addNewJob, setAddNewJob] = useState(null)



  useEffect(() => {
    getJobsUsers()
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

      {loading && <p className="text-gray-500">Loading jobs...</p>}

      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && getJobs?.length === 0 && (
        <p className="text-gray-500">No jobs available at the moment.</p>
      )}

      <button onClick={() => setAddNewJob(true)}>Add your wanted worker</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{job.name}</h2>
            <p className="text-gray-600 mt-1">Job ID: {job.id}</p>

            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs
