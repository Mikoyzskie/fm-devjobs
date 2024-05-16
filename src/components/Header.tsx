import Image from 'next/image'
import Link from "next/link"

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

            <div className='absolute maxWidth inset-0 mt-[45px] flex justify-between'>
                <Link href={"/"} className='hover:cursor-pointer'>
                    <Image
                        src={"/desktop/logo.svg"}
                        width={115}
                        height={32}
                        alt='devjobs logo'
                        className='object-contain h-fit'
                    />
                </Link>
            </div>
        </header>
    )
}
