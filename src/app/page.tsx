import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-6 md:py-10 lg:px-12 lg:py-24">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between">
            <Hero />
          </header>
          <div className="lg:w-1/2">
            <About />
            <Experience />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  )
} 