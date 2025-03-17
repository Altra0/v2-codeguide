"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "../../../../components/ui/button"
import { BeamBackground } from "../../components/beam-background"

export default function AssessmentPage() {
  const params = useParams()
  const router = useRouter()
  const [profile, setProfile] = useState<string>("")
  const [userProfile, setUserProfile] = useState<any>(null)
  
  useEffect(() => {
    if (params.profile) {
      setProfile(params.profile as string)
    }
    
    // Get user profile from localStorage
    const storedProfile = localStorage.getItem("userProfile")
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile))
    }
  }, [params.profile])
  
  if (!profile) {
    return <div>Loading...</div>
  }
  
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <BeamBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            {profile.charAt(0).toUpperCase() + profile.slice(1).replace(/-/g, " ")} Assessment
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Let's assess your skills and interests to create your personalized career roadmap
          </p>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-2">Your Profile</h2>
                {userProfile && (
                  <div className="space-y-2">
                    <p className="text-gray-300"><span className="text-gray-400">Name:</span> {userProfile.name}</p>
                    <p className="text-gray-300"><span className="text-gray-400">Email:</span> {userProfile.email}</p>
                    <p className="text-gray-300"><span className="text-gray-400">Age:</span> {userProfile.age}</p>
                    <p className="text-gray-300"><span className="text-gray-400">Gender:</span> {userProfile.gender.replace(/-/g, " ")}</p>
                    <p className="text-gray-300"><span className="text-gray-400">Career Profile:</span> {userProfile.careerProfile.replace(/-/g, " ")}</p>
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-4">Assessment Coming Soon</h2>
                <p className="text-gray-300 mb-4">
                  We're preparing a personalized assessment for your profile. This will help us create a tailored career roadmap.
                </p>
                <Button 
                  onClick={() => router.push("/dashboard")}
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