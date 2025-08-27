'use client'

import React from 'react'

interface LoadingSkeletonProps {
  className?: string
  variant?: 'card' | 'text' | 'avatar' | 'button'
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  variant = 'card' 
}) => {
  const baseClasses = 'animate-pulse bg-netflix-gray rounded'
  
  const variantClasses = {
    card: 'h-48 w-full',
    text: 'h-4 w-3/4',
    avatar: 'h-8 w-8 rounded-full',
    button: 'h-10 w-24'
  }
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  )
}

export default LoadingSkeleton