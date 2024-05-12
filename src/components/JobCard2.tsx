'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Jobs as JobModel } from '@prisma/client'
import Link from 'next/link'
import { useAuth } from "@clerk/nextjs";
import { Button } from './ui/button'
import AddEditJobDialog from './AddEditJobDialog'
import { JobPosting } from '@/app/types'



export default function JobCard2({ job }: { job: JobPosting }) {

    // const { isLoaded, userId, sessionId, getToken } = useAuth();
    // const [showEditDialog, setShowEditDialog] = useState(false)

    // function getTimePassed(timestamp: string): TimePassed {
    //     const currentTime: Date = new Date();
    //     const passedTime: Date = new Date(timestamp);

    //     const timeDifference: number = currentTime.getTime() - passedTime.getTime();

    //     const millisecondsInMinute: number = 1000 * 60;
    //     const millisecondsInHour: number = millisecondsInMinute * 60;
    //     const millisecondsInDay: number = millisecondsInHour * 24;
    //     const millisecondsInWeek: number = millisecondsInDay * 7;
    //     const millisecondsInMonth: number = millisecondsInDay * 30; // Approximation for a month

    //     const monthsPassed: number = Math.floor(timeDifference / millisecondsInMonth);
    //     const weeksPassed: number = Math.floor(timeDifference / millisecondsInWeek);
    //     const daysPassed: number = Math.floor(timeDifference / millisecondsInDay);
    //     const hoursPassed: number = Math.floor((timeDifference % millisecondsInDay) / millisecondsInHour);
    //     const minutesPassed: number = Math.floor((timeDifference % millisecondsInHour) / millisecondsInMinute);

    //     return {
    //         months: monthsPassed,
    //         weeks: weeksPassed,
    //         days: daysPassed,
    //         hours: hoursPassed,
    //         minutes: minutesPassed
    //     };
    // }
    // const stringedTime = job.createdAt
    // const timePassed: TimePassed = getTimePassed(stringedTime.toString());

    return (
        <>
            <div className='bg-white relative rounded-md'>
                <div className={`border-2 border-[#5964E0] h-[50px] w-[50px] flex items-center justify-center absolute -top-[25px] left-8 rounded-[15px] overflow-hidden bg-[${job.logoBackground}]`}>
                    <Image
                        src={`./logos/scoot.svg`}
                        alt={job.company}
                        width={50}
                        height={50}
                        className={`h-auto w-full object-contain bg-[${job.logoBackground}]`}
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
                            {/* {
                                userId && userId === job.userId &&
                                <div className='flex gap-2'>
                                    <button onClick={() => {
                                        setShowEditDialog(true);
                                    }} className='text-xs underline text-[#6E8098]' >Update</button>

                                </div>
                            } */}
                        </div>

                        <h1 className='font-bold text-[#19202D] text-xl'>{job.position}</h1>
                        <p className='text-[#6E8098]'>{job.company}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[#5964E0] font-bold'>{job.location}</h3>

                        <Link href={`/jobs/${job.id}`}>
                            <Button>Apply Now</Button>
                        </Link>
                    </div>

                </div>
            </div>
            {/* <AddEditJobDialog open={showEditDialog} setOpen={setShowEditDialog} jobToedit={job} /> */}
        </>
    )
}
