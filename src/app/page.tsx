import React from 'react'
import JobCard2 from '@/components/JobCard2'
import Image from 'next/image'
import { jobs } from './data'
import { JobPosting } from "@/app/types"


export default async function page({ searchParams }: any) {

  // console.log(searchParams);
  const location = searchParams.location
  const job = searchParams.job

  function isEmpty() {
    return Object.keys(searchParams).length === 0;
  }

  return (
    <div className='maxWidth -mt-[39px] relative z-10 pb-[104px]'>
      {/* filters */}

      <form className='bg-white rounded-md shadow-md grid grid-cols-3 mb-[105px]'>
        <div className=' flex gap-4 py-7 px-8 '>
          <Image
            src={'/desktop/icon-search.svg'}
            alt='seach icon'
            width={24}
            height={24}
          />

          <input name='job' type="text" placeholder='Filter by title, companies, expertise' className='outline-none w-full' />

        </div>
        <div className=' flex gap-4 py-7 px-8 '>
          <Image
            src={'/desktop/icon-location.svg'}
            alt='seach icon'
            width={17}
            height={24}
          />

          <input name='location' type="text" placeholder='Filter by location…' className='outline-none w-full' />
        </div>
        <div className='flex items-center justify-center'>
          <button type='submit' className='font-bold px-[35.5px] py-3 text-white bgblue rounded-[5px]'>Search</button>
        </div>
      </form>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] joblist'>


        {
          jobs.map((job: JobPosting, index: number) => {
            return (
              <div key={index} className='h-full'>
                <JobCard2 key={index} job={job} />
              </div>
            )
          })
        }

      </div>
    </div>
  )
}
