import Image from 'next/image'
import Jobs from '@/components/Jobs'

export default function page() {


  return (
    <div className='maxWidth -mt-[39px] relative z-10 pb-[104px]'>
      <form className='bg-white dark:bg-[#19202D] rounded-md shadow-md grid grid-cols-3 mb-[105px] auto-cols-max'>
        <div className=' flex gap-4 py-7 px-8 max-w-[463px] w-full'>
          <Image
            src={'/desktop/icon-search.svg'}
            alt='seach icon'
            width={24}
            height={24}
          />

          <input name='job' type="text" placeholder='Filter by title, companies, expertise' className='outline-none w-full bg-white dark:bg-[#19202D]' />

        </div>
        <div className=' flex gap-4 py-7 px-8 '>
          <Image
            src={'/desktop/icon-location.svg'}
            alt='seach icon'
            width={17}
            height={24}
          />

          <input name='location' type="text" placeholder='Filter by location…' className='outline-none w-full bg-white dark:bg-[#19202D]' />
        </div>
        <div className='flex items-center justify-center'>
          <button type='submit' className='font-bold px-[35.5px] py-3 text-white bgblue rounded-[5px]'>Search</button>
        </div>
      </form>


      <Jobs />

    </div>

  )
}
