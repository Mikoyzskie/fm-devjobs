import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { jobs } from '@/app/data';
import { JobPosting } from '@/app/types';

export default async function page({ params }: { params: { id: string } }) {
    const id = Number(params.id)
    const job = jobs.find((x: JobPosting) => x.id === id)

    if (!job) {
        notFound()
    }

    return (
        <>
            <div className='max-w-[730px] w-full mx-auto -mt-[39px] relative z-10 pb-[63px] md:mb-[80px]'>
                <div className='w-full px-[24px] lg:px-0 md:px-[40px]'>
                    <div className='flex bg-white dark:bg-[#19202D] w-full rounded-[6px] overflow-hidden shadow-md mb-8 md:flex-row flex-col'>
                        <div className={`px-[30px] ${job.logoBackground} max-w-[140px] w-full`}>
                            <Image
                                src={`.${job.logo}`}
                                alt={job.company}
                                width={200}
                                height={200}
                                className='h-full  w-full object-contain md:block hidden'
                            />
                            <div className={`${job.logoBackground} p-[13px] h-[50px] w-[50px] flex items-center justify-center absolute -top-[25px] left-1/2 -translate-x-1/2 rounded-[15px] overflow-hidden z-10`}>
                                <Image
                                    src={`.${job.logo}`}
                                    alt={job.company}
                                    width={50}
                                    height={50}
                                    className={`h-auto w-full object-contain `}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-full p-[42px] md:flex-row md:gap-0 flex-col gap-6'>
                            <div className='flex flex-col justify-center  gap-[7px]'>
                                <h2 className='font-bold text-2xl'>{job.company}</h2>
                                <p className='text-[#6E8098]'>{job.company.toLowerCase()}.com</p>
                            </div>
                            <Link href={`${job.website}`}>
                                <button className='rounded-[5px] bg-[rgba(89,100,224,10%)] text-[#5964E0] font-bold px-5 py-4'>
                                    Company Site
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white dark:bg-[#19202D] w-full h-fit shadow-md rounded-[6px] p-6 md:p-12 flex flex-col gap-10'>
                        <div className='flex items-center justify-between gap-5 md:flex-row flex-col'>
                            <div className='md:w-fit w-full'>
                                <p className='text-[#6E8098]'>{job.postedAt}&nbsp; ● &nbsp;{job.contract}</p>
                                <h1 className='text-[28px] font-bold'>{job.position}</h1>
                                <h3 className='text-[#5964E0] font-bold'>{job.location}</h3>
                            </div>
                            <Link href={job.apply} className='md:w-fit w-full'>
                                <Button className='dark:text-white md:w-fit w-full'>Apply Now</Button>
                            </Link>
                        </div>
                        <div className='text-[#6E8098] whitespace-pre-line'>
                            {
                                job.description
                            }
                        </div>

                        <div className='text-[#6E8098]'>
                            <h3 className='text-[#19202D] dark:text-white font-bold text-xl pb-[28px]'>Requirements</h3>
                            <p className='pb-6'>
                                {
                                    job.requirements.content
                                }
                            </p>
                            <ul className='list-disc list-inside flex flex-col gap-2'>
                                {
                                    job.requirements.items.map((item: string, index: number) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='text-[#6E8098]'>
                            <h3 className='text-[#19202D] dark:text-white font-bold text-xl pb-[28px]'>What You Will Do</h3>
                            <p className='pb-6'>
                                {
                                    job.role.content
                                }
                            </p>
                            <ol className='list-decimal list-inside flex flex-col gap-2'>
                                {
                                    job.role.items.map((item: string, index: number) => {
                                        return (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </div>


                </div>
            </div>
            <footer className='bg-white dark:bg-[#19202D] py-[23px] w-full relative bottom-0 px-6 md:px-[53px]'>
                <div className='max-w-[730px] w-full mx-auto flex justify-between items-center'>
                    <div className='flex-col md:flex hidden'>
                        <h3 className='text-xl font-bold'>{job.position}</h3>
                        <p className='text-[#6E8098]'>{job.company}</p>
                    </div>
                    <Link href={job.apply} className='w-full md:w-fit'>
                        <Button className='w-full md:w-fit dark:text-white'>Apply Now</Button>
                    </Link>
                </div>

            </footer>
        </>
    )
}
