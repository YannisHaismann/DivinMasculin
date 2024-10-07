import React from 'react'

export default function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-4xl text-center text-zinc-100 font-bold font-poppins">
      {children}
    </h2>
  )
}
