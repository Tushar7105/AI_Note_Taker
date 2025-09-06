"use client"
import { useUser } from '@clerk/nextjs'
import { useMutation, useQuery } from 'convex/react'
import React, { useEffect } from 'react'
import { api } from '../../convex/_generated/api'
import FileDisplay from './_components/FileDisplay'

function Dashboard() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);
  const CheckUser = async()=>{
    const result = await createUser({
        email: user?.primaryEmailAddress.emailAddress,
        userName : user?.fullName,
        imageUrl: user?.imageUrl
      })
    }
  useEffect(()=>{user&&CheckUser();}, [user]);
  const fileList = useQuery(api.fileStorage.GetUserFile, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  })

  console.log(fileList)

  return (
    <div>
      <h2 className="font-md text-3xl">Workspace</h2>
      <div className="grid gap-5 mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {fileList &&
          fileList.flat().map((file, index) => (
            <FileDisplay key={file._id ?? index} index={index} file={file} />
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
