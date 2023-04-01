export function Navigation() {
  return (
    <nav className="flex space-x-12 bg-navbg text-navtext top-0 fixed left-0 right-0 z-50 dark:text-neutral-100">
      <div className="container mx-auto bg-navbg">
        <div className="flex mx-4 lg:mx-0">
          <h1 className="sm:text-base select-none mr-4 md:mr-0 lg:mr-0 lg:text-3xl my-3 w-72 font-bold lg:w-4/5">
            DQ Griffin
          </h1>
          <div className="flex space-x-4 items-center flex-row-reverse w-full lg:flex-initial lg:w-1/5">
            <a className="border-2 border-slate-700 md:hover:bg-slate-700 lg:hover:bg-slate-700 transition duration-300 rounded-lg p-[5px]" href="#contact-form">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
}