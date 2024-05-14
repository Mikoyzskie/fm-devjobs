import React from 'react'
import Image from 'next/image'
import prisma from '@/lib/db/prisma'
import { CreateJobSchema } from '@/lib/validation/jobs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { jobs } from '@/app/data';
import { JobPosting } from '@/app/types';

export default async function page({ params }: { params: { id: string } }) {
    const id = Number(params.id)
    const job = jobs.find((x: JobPosting) => x.id === id)


    return (
        <div className='max-w-[730px] w-full mx-auto -mt-[39px] relative z-10'>
            <div className='w-full'>

                <div className='flex bg-white w-full rounded-[6px] overflow-hidden shadow-md mb-8'>
                    <div className='px-[30px] bg-black max-w-[140px] w-full'>
                        <Image
                            src={"../logos/scoot.svg"}
                            alt={job!.company}
                            width={200}
                            height={200}
                            className='h-full  w-full object-contain '
                        />
                    </div>
                    <div className='flex justify-between items-center w-full p-[42px]'>
                        <div className='flex flex-col justify-center  gap-[7px]'>
                            <h2 className='font-bold text-2xl'>{job!.company}</h2>
                            <p className='text-[#6E8098]'>{job!.postedAt}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full h-fit shadow-md rounded-[6px] p-12 flex flex-col gap-10'>
                    <div className='flex items-center justify-between gap-5'>
                        <div>
                            <h1 className='text-[28px] font-bold'>{job!.position}</h1>
                            <h3 className='text-[#5964E0] font-bold'>{job!.location}</h3>
                        </div>
                        <Link href={job!.apply}>
                            <Button>Apply Now</Button>
                        </Link>
                    </div>
                    <div className='text-[#6E8098] whitespace-pre-line'>
                        {
                            job!.requirements.content
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}
