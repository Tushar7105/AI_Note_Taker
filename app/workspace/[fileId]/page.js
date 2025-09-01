"use client"
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import WorkspaceHeader from './_components/WorkspaceHeader'
import PdfViewer from './_components/PdfViewer'
import {  useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import TextEditor from './_components/TextEditor'
function Workspace() {
    const {fileId} = useParams();
    const [editorRef, setEditorRef] = useState();
    const fileInfo = useQuery(api.fileStorage.GetFileRecord, {fileId : fileId});
    const fileName = fileInfo?.fileName

  return (
    <div>
        <WorkspaceHeader fileName={fileName} editorRef={editorRef} fileId={fileId}/>

        <div className='grid grid-cols-2 gap-5'>
            <div className='mt-5 mx-5'>
                <TextEditor fileId={fileId} setEditorRef={setEditorRef}/>
            </div>
            <div>
                <PdfViewer fileUrl={fileInfo?.fileUrl}/>
            </div>
        </div>
    </div>
  )
}

export default Workspace