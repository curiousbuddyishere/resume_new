import type { Metadata } from 'next'
import Navigation from '@/components/ui/navigation'

export const metadata: Metadata = {
  title: 'Adnan Shamim | Product Manager',
  description: 'Product Manager building scalable solutions that serve millions.',
}

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-primary">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-light text-primary tracking-tight">
                  Hi, I'm Adnan.
                </h1>
                <div className="space-y-4 max-w-2xl mx-auto">
                  <p className="text-xl md:text-2xl text-secondary leading-relaxed">
                    I'm a product manager, cinema lover, and the growth guy.
                  </p>
                  <p className="text-lg text-tertiary leading-relaxed">
                    Currently, I'm spending my time in a ecomm giant.
                  </p>
                  <p className="text-lg text-tertiary leading-relaxed">
                    Prior to this, I was working in a cool company building for Bharat.
                  </p>
                </div>
                <div className="pt-6">
                  <p className="text-secondary leading-relaxed">
                    Feel free to poke around this website, which serves as a sampling of what I have been upto.
                  </p>
                  <p className="text-secondary leading-relaxed pt-2">
                    If what you find interests you, please get in touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}