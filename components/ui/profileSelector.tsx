'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Eye, Users } from 'lucide-react'

interface Profile {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
}

interface ProfileSelectorProps {
  onProfileSelect: (profileId: string) => void
  selectedProfile?: string
}

const ProfileSelector: React.FC<ProfileSelectorProps> = ({ onProfileSelect, selectedProfile }) => {
  const profiles: Profile[] = [
    {
      id: 'recruiter',
      name: 'Recruiter',
      icon: <Briefcase size={32} />,
      color: 'bg-blue-600',
      description: 'Looking for talent and skills'
    },
    {
      id: 'lurker',
      name: 'Lurker',
      icon: <Eye size={32} />,
      color: 'bg-green-600',
      description: 'Just browsing around'
    },
    {
      id: 'hiring-manager',
      name: 'Hiring Manager',
      icon: <Users size={32} />,
      color: 'bg-purple-600',
      description: 'Building great teams'
    }
  ]

  return (
    <div className="py-16 bg-netflix-black min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-netflix-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Who's visiting?
          </motion.h2>
          <motion.p 
            className="text-lg text-netflix-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select your profile to get a personalized experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              className={`cursor-pointer group ${
                selectedProfile === profile.id ? 'ring-4 ring-netflix-red' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onProfileSelect(profile.id)}
            >
              <div className="bg-netflix-gray rounded-lg p-8 text-center hover:bg-netflix-gray/80 transition-all duration-300">
                <div className={`${profile.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-netflix-white`}>
                  {profile.icon}
                </div>
                <h3 className="text-xl font-semibold text-netflix-white mb-2">
                  {profile.name}
                </h3>
                <p className="text-netflix-muted text-sm">
                  {profile.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileSelector