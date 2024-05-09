'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import AddJobDialog from './AddEditJobDialog';
import { Button } from './ui/button';

export default function Header() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const [createEdit, setCreateEdit] = useState(false)
    return (
        <>
            <header className='relative '>
                <Image
                    src={'/desktop/bg-pattern-header.svg'}
                    alt='header pattern'
                    height={160}
                    width={1440}
                    className='w-full max-h-[162px] z-10'
                />


                <div className='absolute maxWidth inset-0 mt-[45px] flex justify-between'>
                    {/* <Link href={"/"} className='text-2xl text-white font-bold'>workbodia</Link> */}
                    <Image
                        src={"/desktop/logo.svg"}
                        width={115}
                        height={32}
                        alt='devjobs logo'
                        className='object-contain h-fit'
                    />

                </div>

            </header>

            {setCreateEdit && <AddJobDialog open={createEdit} setOpen={setCreateEdit} />}
        </>

    )
}
