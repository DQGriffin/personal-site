"use client"

import { useEffect, useState } from "react";
import { BlogPreview } from "./(components)/BlogPreview";
import useSWR from 'swr';
import { BlogSkeleton } from "./(components)/BlogSkeleton";

const fetchBlogs =  async (url: string) => {
    try {
        const res = await fetch(url)
        const data = await res.json() as Blog[]
        return data
    }
    catch (e: any) {
        console.log('Failed to fetch blogs')
        return [] as Blog[]
    }
}

export default function Blog() {
    const [filterText, setFilterText] = useState('')
    const [sortedBlogs, setSortedblogs] = useState<Blog[]>([])
    const { data: blogs, error } = useSWR('/api/blogs', fetchBlogs);

    useEffect(() => {
        let sorted = blogs?.sort((blogA, blogB) => {
            if (blogA.date < blogB.date) return 1
            return -1
        })

        if (!sorted) sorted = []

        setSortedblogs(sorted)
    }, [blogs])


    if (error) return <div>{`${error}`}</div>
    if (!blogs) {
        return (
            <div className="mt-40 container mx-auto overflow-auto">
                <div className="mb-4">
                    <input className="w-full box-border p-2 focus:outline-none" type="text" placeholder="search..." value={filterText} onChange={(e) => setFilterText(e.currentTarget.value)} />
                </div>
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        )
    }

    return (
        <div className="mt-40 container mx-auto overflow-auto">
            <div className="mb-4">
                {/* <input className="w-full box-border p-2 focus:outline-none" type="text" placeholder="search..." value={filterText} onChange={(e) => setFilterText(e.currentTarget.value)} /> */}
            </div>
            {sortedBlogs.map((blog) => (
                <BlogPreview key={blog.title} blog={blog} />
            ))}
        </div>
    )
}