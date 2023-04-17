"use client"

import { Navigation } from '@/components/shared/Navigation'
import { BlogContext } from './blog/(models)/BlogContext'
import useSWR from 'swr';
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: blogs, error } = useSWR('/api/blogs', fetchBlogs);

  return (
    <BlogContext.Provider value={blogs ?? []}>
      <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
    </BlogContext.Provider>
  )
}
