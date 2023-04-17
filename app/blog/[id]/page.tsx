"use client"

import { useContext, useEffect, useState } from "react"
import { BlogContext } from "../(models)/BlogContext"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from 'remark-gfm'
import Link from "next/link"

interface BlogPostProps {
    params: {
        id: string
    }
}

export default function BlogPost(props: BlogPostProps) {
    const blogs = useContext(BlogContext)
    const [blog, setBlog] = useState<Blog | undefined>()

    useEffect(() => {
        const blog = blogs.find((blog) => blog.id == props.params.id)
        setBlog(blog)
    }, [blogs])

    return (
        <div className="mt-40 container mx-auto">
            <Link className="block mb-4" href={`/blog`}>Back</Link>
            <div className="prose md:prose-lg mx-auto dark:prose-invert">
                <ReactMarkdown className='mx-4 md:mx-0 md:w-full' remarkPlugins={[remarkGfm]}>{blog?.body ?? ''}</ReactMarkdown>
            </div>
            {blog ? <Link className="block mb-4" href={`/blog`}>Back</Link> : <></>}
        </div>
    )
}