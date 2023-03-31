import Link from 'next/link';

interface ProjectCalloutProps {
    name: string;
    description: string
    link: string
    stack: string[]
}

export function ProjectCallout (props: ProjectCalloutProps) {
    return (
        <Link href={props.link}>
            <div className='border-2 border-zinc-500 bg-zinc-50 transition-all duration-200 hover:-translate-y-1 rounded-lg w-80 h-44 dark:hover:bg-zinc-500 dark:bg-zinc-700 cursor-pointer'>
                <div className='w-full h-full flex flex-col text-center justify-center items-center p-2'>
                    <h4 className='text-xl font-bold'>{props.name}</h4>
                    <p className='font-light'>{props.description}</p>
                    <p className='text-sm font-light my-2 text-slate-500 dark:text-slate-400'>{props.stack.join(' · ')}</p>
                </div>
            </div>
        </Link>
    )
}

// export function ProjectCallout (props: ProjectCalloutProps) {
//     return (
//         <Link href={props.link}>
//             <div className='border-2 border-zinc-500 transition-all duration-200 hover:-translate-y-1 rounded-lg w-80 h-20 dark:hover:bg-zinc-500 dark:bg-zinc-700 cursor-pointer'>
//                 <div className='w-1/4 h-full inline-block text-3xl'>
//                     <div className='flex justify-center items-center'>
//                         <p>{props.emoji}</p>
//                     </div>
//                 </div>
//                 <div className='w-3/4 h-full inline-block pt-2'>
//                     <h4 className='inline-block font-bold'>{props.name}</h4>
//                     <p className='inline-block font-light'>{props.description}</p>
//                 </div>
//             </div>
//         </Link>
//     )
// }