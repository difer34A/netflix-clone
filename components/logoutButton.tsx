"use client"

import React from 'react'
import { signOut, getSession } from "next-auth/react"

export default function LogoutButton() {
  return (
    <button onClick={() => signOut()} className="w-20 h-10 bg-slate-400 rounded-xl flex place-items-center justify-center text-white text-xl font-semibold">Logout</button>
    )
}
