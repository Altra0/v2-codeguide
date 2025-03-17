"use client"

import { Book, Briefcase, GraduationCap, Building, Users, Lightbulb } from 'lucide-react'

interface CareerProfileSelectorProps {
  selectedProfile: string
  onProfileSelect: (profile: string) => void
}

export function CareerProfileSelector({ selectedProfile, onProfileSelect }: CareerProfileSelectorProps) {
  const profiles = [
    {
      id: "secondary-school",
      title: "Secondary School",
      description: "I'm in secondary school (Years 7-11)",
      icon: <Book className="h-6 w-6" />
    },
    {
      id: "sixth-form",
      title: "Sixth Form",
      description: "I'm in sixth form or college (Years 12-13)",
      icon: <Book className="h-6 w-6" />
    },
    {
      id: "undergraduate",
      title: "Undergraduate",
      description: "I'm an undergraduate student",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      id: "recent-graduate",
      title: "Recent Graduate",
      description: "I've recently graduated from university",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      id: "job-seeker",
      title: "Job Seeker",
      description: "I'm actively looking for employment",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      id: "professional",
      title: "Career Professional",
      description: "I'm established in my career",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      id: "parent",
      title: "Parent",
      description: "I'm a parent supporting my child's career journey",
      icon: <Users className="h-6 w-6" />
    },
    {
      id: "employer",
      title: "Employer",
      description: "I'm an employer looking for talent",
      icon: <Building className="h-6 w-6" />
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className={`
            flex items-start space-x-4 p-4 rounded-lg cursor-pointer transition-all
            ${selectedProfile === profile.id 
              ? "bg-purple-600/20 border border-purple-500" 
              : "bg-gray-800/50 border border-gray-700 hover:border-gray-600"}
          `}
          onClick={() => onProfileSelect(profile.id)}
        >
          <div className={`p-2 rounded-full ${selectedProfile === profile.id ? "bg-purple-600/30" : "bg-gray-700"}`}>
            {profile.icon}
          </div>
          <div>
            <h3 className="font-medium">{profile.title}</h3>
            <p className="text-sm text-gray-400">{profile.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
} 