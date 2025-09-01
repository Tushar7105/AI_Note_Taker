import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Button } from '../../../../@/components/ui/button'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { toast } from 'sonner'

function WorkspaceHeader({fileId, fileName, editorRef}) {
  const {user} = useUser();
  const saveNotes = useMutation(api.notes.AddNotes);
  const AddNotes = ()=>{
    if(!editorRef){
      toast("Nothing to save");
      return;
    }
    saveNotes({
      fileId : fileId,
      notes : editorRef?.getHTML(),
      createdBy : user?.primaryEmailAddress?.emailAddress
    })
    toast("Changes Saved Successfully ✅")
  }
  return (
    <div className='p-4 flex justify-between shadow-md'>
        <Image src={'/logo.svg'} alt='logo' width={200} height={150} />
        <h2 className='font-bold'>{fileName}</h2>
        <div className='flex gap-2 items-center'>
          <Button onClick={()=>editorRef&&AddNotes()} >Save</Button>
          <UserButton/>
        </div>
    </div>
  )
}

export default WorkspaceHeader