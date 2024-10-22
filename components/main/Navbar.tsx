import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto md:px-[10px]'>
        <a href="#about-me"  className='h-auto w-auto hidden md:flex flex-row items-center'>
            <Image 
                src="/NavLogo.png"
                alt="logo"
                width={70}
                height={70}
                // tf is slowspin
                className='cursor-pointer hover:animate-slowspin '
            />
            <span className='font-bold ml-[10px] hidden lg:block text-gray-300' >
                Weltrowski
            </span>
        </a>
        <div className='sm:w-[500px] w-full h-full flex flex-row items-center justify-between md:mr-20'>
            <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] md:mr-[15px] px-[10px] md:px-[20px] py-[10px] rounded-full text-gray-200 '>
                <a href="#about-me" className='cursor-pointer hover:text-[#bf97ff70] transition-colors'>About me</a>
                <a href="#skills" className='cursor-pointer hover:text-[#bf97ff70] transition-colors'>Skills</a>
                <a href="#projects" className='cursor-pointer hover:text-[#bf97ff70] transition-colors'>Projects</a>
            </div>
        </div>
        <div className='hidden md:flex flex-row gap-5 cursor-pointer '>
            {Socials.map((social) => (
                <a href={social.href}
                target="_blank"
                key={social.name}
                >
                  <Image 
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className='hover:-translate-y-1 transition-transform'
                />
                </a>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Navbar
