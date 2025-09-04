"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api"; 
import { useState } from "react";

export default function FileDisplay({ file, createdAt }) {
  const deleteFile = useMutation(api.fileStorage.DeleteFileFromDB);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    try {
      await deleteFile({ fileId: file.fileId });
      console.log("Deleted:", file.fileId);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Link href={`/workspace/${file.fileId}`}>
      <div className="relative flex p-5 shadow-md rounded-md flex-col items-center justify-center border hover:shadow-lg cursor-pointer transition group">
        
        <button
          onClick={handleDelete}
          disabled={loading}
          className="absolute top-2 right-2 p-1 rounded-full border transition hidden group-hover:flex
                     border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white hover:cursor-pointer"
        >
          <Trash2 className="h-4 w-4" />
        </button>

        <Image src={"/pdf.png"} alt="file" height={50} width={50} />
        <h2 className="mt-3 font-medium text-center text-lg">{file?.fileName}</h2>
        {createdAt && (
          <p className="text-xs text-gray-500 mt-1">{createdAt}</p>
        )}
      </div>
    </Link>
  );
}
