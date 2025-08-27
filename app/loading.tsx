export default function Loading() {
  return (
    <div className="min-h-screen bg-netflix-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-netflix-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-netflix-white">Loading...</p>
      </div>
    </div>
  )
}