import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader() {
  return (
    <div className='p-4 flex justify-between shadow-md'>
        <Image src={'/logo.svg'} alt='logo' width={200} height={150} />
        <UserButton/>
    </div>
  )
}

export default WorkspaceHeader