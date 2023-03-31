import { TechnologyCallout } from "./TechnologyCallout";

export function Skills () {
    return (
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-3xl font-semibold my-4'>Skills & Technologies</h3>
          <div className='mx-4 w-42 lg:w-[600px] flex flex-wrap justify-center'>
            <TechnologyCallout title='HTML' />
            <TechnologyCallout title='CSS' />
            <TechnologyCallout title='JavaScript' />
            <TechnologyCallout title='TypeScript' />
            <TechnologyCallout title='React' />
            <TechnologyCallout title='Next.js' />
            <TechnologyCallout title='Tailwind CSS' />
            <TechnologyCallout title='MUI' />
            <TechnologyCallout title='REST' />
            <TechnologyCallout title='Node' />
            <TechnologyCallout title='Docker' />
            <TechnologyCallout title='Swift' />
          </div>
        </div>
    )
}