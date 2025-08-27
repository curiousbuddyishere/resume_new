import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-netflix-black flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-netflix-red mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-netflix-white mb-4">
          This page could not be found.
        </h2>
        <p className="text-netflix-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="netflix-button inline-flex items-center gap-2 px-6 py-3"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}