"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { CareerProfileSelector } from "./career-profile-selector"
import { UserProfile } from "../types"

export default function OnboardingForm() {
  const router = useRouter()
  const { user } = useUser()
  
  const [formData, setFormData] = useState<UserProfile>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    careerProfile: ""
  })
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleProfileSelect = (profile: string) => {
    setFormData(prev => ({ ...prev, careerProfile: profile }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Save user profile to localStorage or state management
    localStorage.setItem("userProfile", JSON.stringify(formData))
    
    // Redirect to appropriate assessment page based on career profile
    if (formData.careerProfile) {
      router.push(`/onboarding/assessment/${formData.careerProfile.toLowerCase()}`)
    }
  }

  return (
    <div className="max-w-4xl w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
        {/* Personal Details Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Personal Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name Field */}
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-200">First Name</label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="bg-gray-800/50 border-gray-700 text-white"
              />
            </div>
            
            {/* Last Name Field */}
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-200">Last Name</label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="bg-gray-800/50 border-gray-700 text-white"
              />
            </div>
          </div>
        </div>
        
        {/* Career Profile Selection */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Select Your Profile</h3>
          <p className="text-sm text-gray-400">Choose the option that best describes your current situation</p>
          
          <CareerProfileSelector 
            selectedProfile={formData.careerProfile} 
            onProfileSelect={handleProfileSelect} 
          />
        </div>
        
        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          disabled={!formData.firstName || !formData.lastName || !formData.careerProfile}
        >
          Continue to Assessment
        </Button>
      </form>
    </div>
  )
} 