"use client"

import { Book, Briefcase, GraduationCap, Building, Users } from 'lucide-react'

type CareerProfile = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const careerProfiles: CareerProfile[] = [
  {
    id: "secondary-school",
    title: "Secondary School",
    description: "Currently in secondary education",
    icon: <Book className="h-6 w-6 text-blue-400" />
  },
  {
    id: "sixth-form",
    title: "Sixth Form",
    description: "Studying at sixth form or college",
    icon: <Book className="h-6 w-6 text-blue-400" />
  },
  {
    id: "undergraduate",
    title: "Undergraduate",
    description: "University student or apprentice",
    icon: <GraduationCap className="h-6 w-6 text-blue-400" />
  },
  {
    id: "recent-graduate",
    title: "Recent Graduate",
    description: "Graduated within the last 2 years",
    icon: <GraduationCap className="h-6 w-6 text-blue-400" />
  },
  {
    id: "job-seeker",
    title: "Job Seeker",
    description: "Actively looking for employment",
    icon: <Briefcase className="h-6 w-6 text-blue-400" />
  },
  {
    id: "professional",
    title: "Career Professional",
    description: "Established in your career",
    icon: <Briefcase className="h-6 w-6 text-blue-400" />
  },
  {
    id: "parent",
    title: "Parent",
    description: "Supporting a child in education or career",
    icon: <Users className="h-6 w-6 text-blue-400" />
  },
  {
    id: "employer",
    title: "Employer/Business",
    description: "Representing a company or organization",
    icon: <Building className="h-6 w-6 text-blue-400" />
  }
]

interface CareerProfileSelectorProps {
  selectedProfile: string;
  onProfileSelect: (profile: string) => void;
}

export function CareerProfileSelector({ selectedProfile, onProfileSelect }: CareerProfileSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {careerProfiles.map((profile) => (
        <div
          key={profile.id}
          className={`
            flex flex-col items-center text-center p-4 rounded-lg cursor-pointer transition-all h-full
            ${selectedProfile === profile.id
              ? "bg-gray-800 border border-blue-500"
              : "bg-gray-900 border border-gray-800 hover:border-gray-700"}
          `}
          onClick={() => onProfileSelect(profile.id)}
        >
          <div className={`p-3 rounded-full mb-3 ${
            selectedProfile === profile.id ? "bg-blue-500/20" : "bg-gray-800"
          }`}>
            {profile.icon}
          </div>
          <h3 className="font-medium mb-1 text-sm md:text-base">{profile.title}</h3>
          <p className="text-xs md:text-sm text-gray-400">{profile.description}</p>
        </div>
      ))}
    </div>
  )
} 