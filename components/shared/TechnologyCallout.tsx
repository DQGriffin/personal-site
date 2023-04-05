import Image from 'next/image'
import verifiedIcon from '../../res/verified.svg'

interface TechnologyCalloutProps {
    title: string;
}

export function TechnologyCallout (props: TechnologyCalloutProps) {
    return (
        <div className="w-40 h-10 space-x-1 rounded bg-slate-100 dark:bg-zinc-700 flex mx-2 my-2">
            <Image className='ml-2' src={verifiedIcon} alt='verified icon' width={25} height={25} />
            <div className="flex items-center font-bold px-2 bg-slate-100 dark:bg-zinc-700 text-slate-800 dark:text-slate-100">
                {props.title}
            </div>
        </div>
    )
}