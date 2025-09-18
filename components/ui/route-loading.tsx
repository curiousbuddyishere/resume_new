import React from 'react'

const RouteLoading = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-secondary">Loading...</p>
      </div>
    </div>
  )
}

export default RouteLoading