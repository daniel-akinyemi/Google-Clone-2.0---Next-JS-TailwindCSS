import { MicrophoneIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'

const Header = () => {
    const router = useRouter()
    const searchInputRef= useRef()
  return (
    <header>
        <Image
        src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
        height={40} 
        width={120}
        onClick= {()=> router.push('/')}
        className='cursor-pointer'
        />
        <form className='flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
            <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type='text'/>
            <XIcon className='h-7 sm:me-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={()=> (searchInputRef.current.value = '')}
            />
            <MicrophoneIcon className='mr-3 h-6 hidden' />
        </form>
    </header>
  )
}

export default Header