import type { Metadata } from 'next'
import Navigation from '@/components/ui/navigation'

export const metadata: Metadata = {
  title: 'Adnan Shamim | Product Manager',
  description: 'Product Manager building scalable solutions that serve millions.',
}

export default function HomePage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'adnanshamim11work@gmail.com'
  
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-primary pt-16 flex flex-col">
        {/* Hero Section */}
        <section className="flex-grow flex items-center justify-center px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-light text-primary tracking-tight">
                Hi, I'm Adnan
              </h1>
              <div className="space-y-5">
                <p className="text-xl md:text-2xl text-secondary leading-relaxed">
                  I work on product and I love cinema
                </p>
                <p className="text-lg text-tertiary leading-relaxed">
                  Currently, I'm spending my time at a Gen AI startup
                </p>
                <p className="text-lg text-tertiary leading-relaxed">
                  Prior to this, I was working in a cool company building for Bharat
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <p className="text-secondary leading-relaxed">
                  Feel free to poke around this website, which serves as a sampling of what I have been upto
                </p>
                <p className="text-secondary leading-relaxed">
                  If what you find interests you,{' '}
                  <a 
                    href={`mailto:${contactEmail}`} 
                    className="text-accent hover:text-bright transition-colors duration-300"
                  >
                    please get in touch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-6 text-center text-tertiary text-sm">
          <div className="max-w-4xl mx-auto px-4">
            Thanks to Qwen and GLM for helping to build this
          </div>
        </footer>
      </main>
    </>
  )
}