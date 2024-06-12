import Image from 'next/image'
import Jobs from '@/components/Jobs'
import { Checkbox } from "@/components/ui/checkbox"
import { Suspense } from 'react'

export default function page() {

  return (
    <div className='maxWidth -mt-[39px] relative z-10 pb-[104px]'>
      <form className='bg-white dark:bg-[#19202D] rounded-md shadow-md md:mb-[105px] mb-[70px] grid grid-cols-1 md:grid-cols-3 md:inline-flex w-full'>
        <div className=' flex gap-4 py-7 px-6 xl:px-8 lg:max-w-[463px] w-full border-0 md:border-r md:border-[rgba(110,128,152,20%)]'>
          <Image
            src={'/desktop/icon-search.svg'}
            alt='seach icon'
            width={24}
            height={24}
            className='object-contain'
          />

          <input name='title' type="text" placeholder='Filter by title, companies, expertise' className='outline-none w-full bg-white dark:bg-[#19202D]' />
          {/* <input name='title' type="text" placeholder='Filter by title' className='outline-none w-full bg-white dark:bg-[#19202D] lg:hidden block' /> */}

        </div>
        <div className='md:flex gap-4 py-7 px-6 xl:px-8 border-r border-[rgba(110,128,152,20%)] max-w-[213px] lg:max-w-[300px] w-full hidden'>
          <Image
            src={'/desktop/icon-location.svg'}
            alt='seach icon'
            width={17}
            height={24}
            className='object-contain'
          />

          <input name='location' type="text" placeholder='Filter by location…' className='outline-none w-full bg-white dark:bg-[#19202D]' />
        </div>
        <div className='md:flex items-center justify-between p-4 w-full hidden'>
          <div className='flex gap-[14px] items-center ml-0 lg:ml-4'>
            <Checkbox id="isFulltime" value={"true"} name='fulltime' />
            <label htmlFor="isFulltime" className='font-bold lg:block hidden text-nowrap'>Full Time Only</label>
            <label htmlFor="isFulltime" className='font-bold lg:hidden block'>Full Time</label>
          </div>
          <button type='submit' className='font-bold px-[35.5px] py-3 text-white bgblue rounded-[5px]'>Search</button>
        </div>
      </form>

      <Suspense>
        <Jobs />
      </Suspense>

    </div>

  )
}
