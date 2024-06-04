'use client'
import { Button } from '@/components/ui/button'
import { jobs } from '@/app/data'
import { JobPosting } from "@/app/types"
import JobCard2 from '@/components/JobCard2'
import { useEffect, useState } from 'react'

export default function Jobs({ title }: { title: string }) {
    const [limiter, setLimiter] = useState(12)
    const [data, setData] = useState(jobs)
    function handleLoadMore() {
        if (limiter === 12) {
            setLimiter(15)
        } else {
            setLimiter(12)
        }
    }

    useEffect(() => {
        if (title) {
            const job = jobs.map(job => job.position.includes(title) ? job : undefined)
            console.log(job);

        }

    }, [title])




    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px] gap-y-[49px] sm:gap-y-[65px] sm:gap-x-[11px] joblist'>
                {/* {
                    jobs.slice(0, limiter).map((job: JobPosting, index: number) => {
                        if (!title) {
                            return (
                                <div key={index} className='h-full'>
                                    <JobCard2 key={index} job={job} />
                                </div>
                            )
                        } else {
                            if (job.position.includes(title)) {
                                return (
                                    <div key={index} className='h-full'>
                                        <JobCard2 key={index} job={job} />
                                    </div>
                                )
                            }
                            return
                        }
                    })
                } */}
                {
                    title && jobs.filter(job => job.position.includes(`${title}`)).map((job, index: number) => {
                        return (
                            <div key={index} className='h-full'>
                                <JobCard2 key={index} job={job} />
                            </div>
                        )
                    })
                }

            </div>
            <div className='flex items-center justify-center mt-14'>
                <Button onClick={handleLoadMore}>Load More</Button>
            </div>
        </>

    )
}
