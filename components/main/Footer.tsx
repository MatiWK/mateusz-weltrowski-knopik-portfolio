import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo
} from "react-icons/rx";

import {FaYoutube} from "react-icons/fa";

const Footer = () => {
    const date = new Date()

  return (
    <div className='w-full h-full  text-gray-200 shadow-lg p-[15px] relative z-50'>
      <div className='w-full h-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

            <div className='min-w-[200px] h-auto flex flex-col py-10 items-center justify-start'>
                <div className='font-bold text-[16px] '>
                    Community
                </div>
                <p  className='flex flex-row items-center my-[15px] cursor-text hover:text-[#bf97ff70] transition-colors'>
                    <FaYoutube />
                    <span className='text-[15px] ml-[6px] '>Youtube</span>
                </p>
                <a href="https://github.com/MatiWK" target="_blank"    className='flex flex-row items-center my-[15px] cursor-pointer hover:text-[#bf97ff70] transition-colors'>
                    <RxGithubLogo/>
                    <span className='text-[15px] ml-[6px] '>Github</span>
                </a >
                <p  className='flex flex-row items-center my-[15px] cursor-text hover:text-[#bf97ff70] transition-colors'>
                    <RxDiscordLogo />
                    <span className='text-[15px] ml-[6px] '>Discord</span>
                </p>
            </div>

            <div className='min-w-[200px] h-auto flex flex-col py-10  items-center justify-start'>
                <div className='font-bold text-[16px]'>
                    Social Media
                </div>
                <a href="https://www.instagram.com/matiweltrowskik/" target="_blank" className='flex flex-row items-center my-[15px] cursor-pointer hover:text-[#bf97ff70] transition-colors'>
                    <RxInstagramLogo />
                    <span className='text-[15px] ml-[6px] '>Instagram</span>
                </a>
                <p  className='flex flex-row items-center my-[15px] cursor-text hover:text-[#bf97ff70] transition-colors'>
                    <RxTwitterLogo/>
                    <span className='text-[15px] ml-[6px] '>Twitter</span>
                </p >
                <a href="https://www.linkedin.com/in/mateusz-weltrowski-knopik-7740aa274/" target="_blank" className='flex flex-row items-center my-[15px] cursor-pointer hover:text-[#bf97ff70] transition-colors'>
                    <RxLinkedinLogo />
                    <span className='text-[15px] ml-[6px] '>Linkedin</span>
                </a >
            </div>

            <div className='min-w-[200px] h-auto flex flex-col py-10  items-center justify-start'>
                <div className='font-bold text-[16px]'>
                    About
                </div>
                <p  className='flex flex-row items-center my-[15px] cursor-text hover:text-[#bf97ff70] transition-colors'>
                    <span className='text-[15px] ml-[6px] '>Contact me</span>
                </p >
                <p  className='flex flex-row items-center my-[15px] cursor-text hover:text-[#bf97ff70] transition-colors'>
                    <span className='text-[15px] ml-[6px] '>+48-605-500-106</span>
                </p >
                <p  className='flex flex-row items-center my-[15px] cursor-text hover:text-[#bf97ff70] transition-colors'>
                    <span className='text-[15px] ml-[6px] '>mweltrowskik@gmail.com</span>
                </p >
            </div>
        </div> 

        <div className='my-[20px] text-[15px] text-center'>
            Copyright &copy; Mateusz Weltrowski-Knopik {date.getFullYear()}.

        </div>
      </div>
    </div>
  )
}

export default Footer
