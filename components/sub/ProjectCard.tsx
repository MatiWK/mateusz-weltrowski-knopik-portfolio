import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
    href: string;
}

const ProjectCard = ({src, title, description, href}: Props) => {

  return (
    <div className='relative z-50 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] opacity-70 hover:opacity-100 transition-all cursor-pointer hover:scale-105 hover:-translate-y-1 duration-300'>
        <a href={href}>
        <Image 
            src={src}
            alt="title"
            width={1000}
            height={1000}
            className='w-full object-cover'
        />
        <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white '>{title}</h1>
            <p className='mt-2 text-gray-300' >{description}</p>
        </div>
        </a>
    </div>
  )
}

export default ProjectCard
