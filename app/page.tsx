
import { Hero } from '@/components/shared/Hero'
import { Footer } from '@/components/shared/Footer'
import { FeaturedProject } from '@/components/shared/FeaturedProject'
import { Skills } from '@/components/shared/Skills'
import { ContactForm } from '@/components/shared/ContactForm'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div className='bg-herobg text-navtext'>
      <div className="container mx-auto space-y-32 mb-16">
        <Hero />
        <FeaturedProject />
        <Skills />
        <ContactForm />
      </div>
      <Footer />
      <Analytics />
    </div>
  )
}
