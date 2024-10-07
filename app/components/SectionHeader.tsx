import React from 'react'

export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-3 items-center'>
      {children}
    </div>
  )
}
