import Header from '@/components/Header'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-[#f2f2f2] dark:bg-[#121721] min-h-screen'>
            {children}
        </div>
    )
}
