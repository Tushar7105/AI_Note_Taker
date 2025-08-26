"use client"
import { Button } from '@/@/components/ui/button'
import { Progress } from '@/@/components/ui/progress'
import { Layout, Shield } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function SideBar() {
    const [pdfUploaded, setPdfUploaded] = useState(0);
    const [usageBar, setUsageBar] = useState(0);

    useEffect(()=>{setUsageBar(pdfUploaded/5)}, [pdfUploaded]);

    const onPdfUpload = ()=>{
        setPdfUploaded(pdfUploaded + 1);
    }
  return (

        <div className='shadow-sm h-screen p-7'>
            <Image src={'/logo.svg'} alt='logo' width={200} height={150}/>

            <div className='mt-10'>
                <Button className='w-full'>+Upload PDF</Button>

                <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
                    <Layout/>
                    <h2>Workspace</h2>
                </div>

                <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer'>
                    <Shield/>
                    <h2>Upgrade</h2>
                </div>
            </div>

            <div className='absolute bottom-10 w-[80%]'>
                <Progress value={usageBar}></Progress>
                <p className='text-sm mt-1'>{pdfUploaded} out of 5 PDF Uploaded</p>
                <p className='text-sm text-gray-400 mt-2'>Upgrade to Upload more PDF's</p>
            </div>

        </div>
  )
}

export default SideBar