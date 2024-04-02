"use client"

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";


interface INextProviderProps {
  children: ReactNode
}

function NextProvider({
  children
}: INextProviderProps) {
  const router = useRouter();


  return (
    <NextUIProvider 
      navigate={router.push}
    >
      {children}
    </NextUIProvider>
  )
}

export default NextProvider;

