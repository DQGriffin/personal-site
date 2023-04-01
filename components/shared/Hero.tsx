import Image from 'next/image'
import gitHubDark from '../../res/github-mark.svg'
import gitHubLight from '../../res/github-mark-white.svg'
import linkedInLogo from '../../res/linkedin.png'

export function Hero () {
    return (
        <div className='bg-herobg pt-24 text-zinc-50 md:mx-8'>
            <div className="lg:container mt-20 md:mx-auto lg:mx-auto mx-4">
                <div className='w-full h-64 lg:h-[500px] flex justify-center items-center lg:items-start flex-col'>
                    <h2 className='text-2xl lg:text-5xl font-bold mb-2'>Hi, I&apos;m DQ.</h2>
                    <h2 className='text-2xl lg:text-5xl font-bold mb-2'>I build fun things for the web</h2>
                    <div className='space-x-4 mt-2'>
                        <a href='https://www.github.com/DQGriffin' referrerPolicy='no-referrer' target='_blank' className='inline-block'><Image src={gitHubLight} alt='GitHub logo' width={30} height={30} className='' /></a>
                        <a href='https://www.linkedin.com/in/dqgriffin' referrerPolicy='no-referrer' target='_blank' className='inline-block'><Image src={linkedInLogo} alt='GitHub logo' width={30} height={30} className='' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}