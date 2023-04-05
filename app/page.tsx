
import { Hero } from '@/components/shared/Hero'
import { Footer } from '@/components/shared/Footer'
import { FeaturedProject } from '@/components/shared/FeaturedProject'
import { Skills } from '@/components/shared/Skills'
import { ContactForm } from '@/components/shared/ContactForm'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div className='text-gray-800 dark:text-navtext'>
      <Hero />
      <div className="container mx-auto space-y-32 mt-32 mb-16">
        {/* <Hero /> */}
        <FeaturedProject />
        <Skills />
        <ContactForm />
      </div>
      <Footer />
      <Analytics />
    </div>
  )
}
