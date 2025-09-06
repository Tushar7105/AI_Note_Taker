"use client"
import { Button } from '../../../@/components/ui/button'
import { Progress } from '../../../@/components/ui/progress'
import { Layout, Shield } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import UploadPdfDialog from './UploadPdfDialog'
import { useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideBar() {
  const [pdfUploaded, setPdfUploaded] = useState(0);
  const { user } = useUser();
  const path = usePathname();

  const fileList = useQuery(api.fileStorage.GetUserFile, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  const userInfo = useQuery(api.user.getUserInfo, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  useEffect(() => {
    setPdfUploaded(fileList?.length ?? 0);
  }, [fileList]);

  return (
    <div className="shadow-sm h-screen p-7 relative">
      <Image src="/logo.svg" alt="logo" width={200} height={150} />

      <div className="mt-10">
        <UploadPdfDialog
          isMaxFile={!userInfo?.upgrade && pdfUploaded >= 5}
        />

        <Link href="/dashboard">
          <div
            className={`flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer ${
              path === '/dashboard' && 'bg-slate-200'
            }`}
          >
            <Layout />
            <h2>Workspace</h2>
          </div>
        </Link>

        <Link href="/dashboard/upgrade">
          <div
            className={`flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer ${
              path === '/dashboard/upgrade' && 'bg-slate-200'
            }`}
          >
            <Shield />
            <h2>Upgrade</h2>
          </div>
        </Link>
      </div>

      <div
        className={`absolute bottom-10 w-[80%] ${
          userInfo?.upgrade ? 'hidden' : ''
        }`}
      >
        <Progress value={(pdfUploaded / 5) * 100} />
        <p className="text-sm mt-1">{pdfUploaded} out of 5 PDF Uploaded</p>
        <p className="text-sm text-gray-400 mt-2">
          Upgrade to Upload more PDF's
        </p>
      </div>
    </div>
  );
}

export default SideBar;
