'use client'
import React from 'react'

const ProfileById = async ({ params }) => {
  const { id } = await params
  console.log(id);

  return (
    <div>ProfileById{id}</div>
  )
}

export default ProfileById