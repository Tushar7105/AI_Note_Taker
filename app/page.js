"use client"
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const {user} = useUser();
  const createUser = useMutation(api.user.createUser);
  const CheckUser = async()=>{
    const result = await createUser({
      email: user?.primaryEmailAddress.emailAddress,
      userName : user?.fullName,
      imageUrl: user?.imageUrl
    })
    console.log(result);
  }
  useEffect(()=>{user&&CheckUser();}, [user]);
  return (
    <div>Hello World
      <UserButton></UserButton>
    </div>
  );
}
