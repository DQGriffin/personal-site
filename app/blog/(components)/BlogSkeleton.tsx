export function BlogSkeleton() {
    return (
        <div className="box-border h-40 p-4 mx-4 md:mx-0 mb-8 border-2 dark:border-neutral-700 dark:bg-neutral-800 rounded-xl">
            <div className="flex items-center mb-4">
                <h2 className="md:text-2xl font-semibold md:font-bold md:truncate w-72 h-8 animate-pulse bg-neutral-200"></h2>
                <p className="w-1/2 text-right text-sm"></p>
            </div>
            <p className="w-full h-8 bg-neutral-300 mb-4 animate-pulse"></p>
            <p className="w-full h-8 bg-neutral-400 animate-pulse"></p>
        </div>
    )
}