"use client"

import Link from 'next/link'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function FeaturedProject () {
  const { ref, inView, entry } = useInView({threshold: 1});

    useEffect(() => {
        if (inView && entry) {
            entry.target.classList.add('motion-safe:animate-fadeIn')
        }
    }, [inView])
  
    return (
        <div className='flex flex-col items-center text-center justify-center motion-safe:opacity-0' ref={ref}>
          <h3 className='text-3xl font-semibold my-4'>Featured project</h3>
          <div className='flex flex-col justify-center items-center max-w-[700px] h-56 border-[1px] mx-4 border-gray-400 bg-navbg rounded-lg'>
            <p className='text-2xl font-semibold mb-2'>Croissant</p>
            <p className='text-sm mb-2 text-gray-400'>React · TypeScript · Material UI · RingCentral API</p>
            <p className='mb-2 px-4'>Croissant is a tool used internally at RingCentral to stand up and support customer accounts</p>
            <Link className=' underline underline-offset-4' href='https://github.com/RingCentral-Pro-Services/Croissant.js' target='_blank'>GitHub Repo</Link>
          </div>
        </div>
    )
}