"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "../../../../components/ui/button"
import { BeamBackground } from "../../components/beam-background"
import { UserProfile } from "../../types"

export default function AssessmentPage() {
  const params = useParams()
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get user profile from localStorage
    const storedProfile = localStorage.getItem("userProfile")
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile))
    }
    setLoading(false)
  }, [])

  const handleContinue = () => {
    router.push("/dashboard")
  }

  if (loading || !profile) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  const profileName = params.profile as string
  const profileTitle = profileName.split("-").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ")

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <BeamBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            {profileTitle} Assessment
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Welcome, {profile.firstName} {profile.lastName}!
          </p>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-2">Your Profile</h2>
                <div className="space-y-2">
                  <p className="text-gray-300"><span className="text-gray-400">First Name:</span> {profile.firstName}</p>
                  <p className="text-gray-300"><span className="text-gray-400">Last Name:</span> {profile.lastName}</p>
                  <p className="text-gray-300"><span className="text-gray-400">Career Profile:</span> {profileTitle}</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-4">Assessment Coming Soon</h2>
                <p className="text-gray-300 mb-4">
                  We're preparing a personalized assessment for your profile. This will help us create a tailored career roadmap.
                </p>
                <Button 
                  onClick={handleContinue}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Continue to Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 