

import Image from 'next/image'
import Link from "next/link"
import Switcher from './Switcher'

export default function Header() {

    return (
        <header className='relative '>
            <Image
                src={'/desktop/bg-pattern-header.svg'}
                alt='header pattern'
                height={160}
                width={1440}
                className='w-full max-h-[162px] z-10'
            />

            <div className='absolute maxWidth inset-0 flex justify-between items-center'>
                <Link href={"/"} className='hover:cursor-pointer'>
                    <Image
                        src={"/desktop/logo.svg"}
                        width={115}
                        height={32}
                        alt='devjobs logo'
                        className='object-contain h-fit'
                    />
                </Link>
                <div className='flex items-center gap-4'>
                    <Image
                        src={"/desktop/icon-sun.svg"}
                        alt='sun icon'
                        height={20}
                        width={20}
                    />
                    <Switcher />
                    <Image
                        src={"/desktop/icon-moon.svg"}
                        alt='sun icon'
                        height={12}
                        width={12}
                    />
                </div>
            </div>
        </header>
    )
}
