'use client'
import { Button } from '@/components/ui/button'
import { jobs } from '@/app/data'
import { JobPosting } from "@/app/types"
import JobCard2 from '@/components/JobCard2'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'


interface Result {
    index: number,
    obj: JobPosting
}

export default function Jobs() {
    const [limiter, setLimiter] = useState(12)

    const searchParams = useSearchParams()

    const title = searchParams.get('title')
    const location = searchParams.get('location')
    const fulltime = searchParams.get('fulltime')

    console.log(title);

    let filteredJob = jobs

    if (title) {
        filteredJob = jobs.filter((job: JobPosting) => job.position.toLocaleLowerCase().includes(title.toLowerCase()) || job.company.toLocaleLowerCase().includes(title.toLowerCase()));
    }
    if (location) {
        filteredJob = jobs.filter((job: JobPosting) => job.location.toLocaleLowerCase().includes(location.toLowerCase()));
    }
    if (fulltime && fulltime === "true") {
        filteredJob = jobs.filter((job: JobPosting) => job.contract === "Full Time");
    }


    console.log(filteredJob);



    function handleLoadMore() {
        if (limiter === 12) {
            setLimiter(15)
        } else {
            setLimiter(12)
        }
    }



    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px] gap-y-[49px] sm:gap-y-[65px] sm:gap-x-[11px] joblist'>
                {
                    filteredJob.slice(0, limiter).map((job: JobPosting, index: number) => {
                        return (
                            <div key={index} className='h-full'>
                                <JobCard2 key={index} job={job} />
                            </div>
                        )
                    })
                }


            </div>
            <div className='flex items-center justify-center mt-14'>
                {
                    filteredJob.length > 12 ? <Button onClick={handleLoadMore}>Load More</Button> : ""
                }
            </div>
        </>

    )
}
