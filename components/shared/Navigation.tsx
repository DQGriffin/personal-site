import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex space-x-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-400 dark:from-black dark:to-black text-white top-0 fixed left-0 right-0 z-50 dark:text-neutral-100">
      <div className="container mx-auto">
        <div className="flex mx-4 lg:mx-0">
          <Link className="sm:text-base select-none mr-4 md:mr-0 lg:mr-0 lg:text-3xl my-3 w-72 font-bold md:4/5 lg:w-4/5" href='/'>DQ Griffin</Link>
          <div className="flex space-x-4 items-center flex-row-reverse w-full lg:flex-initial md:1/5 lg:w-1/5">
            {/* <a className="md:hover:bg-slate-700 lg:hover:bg-slate-700 transition duration-300 text-white rounded-lg p-[5px]" href="/blog">Blog</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}