import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id="projects" className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src="/matronite.png"
            title="Video Steaming Application"
            description="I am currently in the process of building a video streaming application with a paywall for subscribers. Working with Next 14 and MongoDB."
            href="https://github.com/MatiWK/matronite-next-mongo-typescript"
            />
            <ProjectCard
            src="/ecom-shop.png"
            title="Ecommerce store and admin panel"
            description="I build an ecommerce store and an admin panel for it. You can use the admin panel to add products track orders. Created in Next 13 and Prisma."
            href="https://github.com/MatiWK/ecommerce-store"
            />
            <ProjectCard
            src="/duo-clone.png"
            title="Duolingo clone"
            description="I created a perfect Duolingo clone. It has working lesson functionality with progression functionality. Made with Next 13 and Postgre SQL."
            href="https://github.com/MatiWK/mati-lingo"
            />

        </div>
      
    </div>
  )
}

export default Projects
