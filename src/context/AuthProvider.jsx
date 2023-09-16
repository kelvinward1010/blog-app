"use client"
import React from 'react';
import { SessionProvider } from "next-auth/react";

export function AuthProvider({children}) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}
