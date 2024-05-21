import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { JobPosting } from '@/app/types'

export default function JobCard2({ job }: { job: JobPosting }) {

    return (
        <Link href={`/jobs/${job.id}`}>
            <div className='bg-white dark:bg-[#19202D] relative rounded-md h-full'>
                <div className={`${job.logoBackground} p-[13px] h-[50px] w-[50px] flex items-center justify-center absolute -top-[25px] left-8 rounded-[15px] overflow-hidden z-10`}>
                    <Image
                        src={`${job.logo}`}
                        alt={job.company}
                        width={50}
                        height={50}
                        className={`h-auto w-full object-contain `}
                    />

                </div>
                <div className='px-8 h-full pt-[49px] pb-8 flex flex-col justify-between gap-[44px]'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <div className='text-[#6E8098] text-xs flex items-center gap-3'>
                                <p>{job.postedAt} ago</p>
                                <p>
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2" r="2" fill="#6E8098" />
                                    </svg>

                                </p>
                                <p>{job.contract}</p>
                            </div>

                        </div>

                        <h1 className='font-bold text-[#19202D] dark:text-white text-xl'>{job.position}</h1>
                        <p className='text-[#6E8098]'>{job.company}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[#5964E0] font-bold'>{job.location}</h3>
                    </div>

                </div>
            </div>
        </Link>
    )
}
