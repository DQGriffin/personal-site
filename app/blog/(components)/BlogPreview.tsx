import { sanatize } from "@/utilities/utils"
import Link from "next/link"

interface BlogPreviewProps {
    blog: Blog
}

export function BlogPreview(props: BlogPreviewProps) {
    const {blog} = props

    return (
        <Link href={`/blog/${blog.id}`}>
            <div className="box-border h-40 p-4 mx-4 md:mx-0 mb-8 border-2 dark:border-neutral-700 dark:bg-neutral-800 rounded-xl">
                <div className="flex items-center mb-4">
                    <h2 className="md:text-2xl font-semibold md:font-bold md:truncate w-1/2">{blog.title}</h2>
                    <p className="w-1/2 text-right text-sm">{new Date(blog.date).toDateString()}</p>
                </div>
                <p className="line-clamp-3">{sanatize(blog.body)}</p>
            </div>
        </Link>
    )
}