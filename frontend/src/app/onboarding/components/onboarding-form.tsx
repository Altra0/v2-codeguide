"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { CareerProfileSelector } from "./career-profile-selector"
import { UserProfile } from "../types"

export default function OnboardingForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<UserProfile>({
    name: "",
    email: "",
    age: "",
    gender: "",
    careerProfile: ""
  })
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleGenderChange = (value: string) => {
    setFormData(prev => ({ ...prev, gender: value }))
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
    <form onSubmit={handleSubmit} className="space-y-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-200">Full Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="bg-gray-800/50 border-gray-700 text-white"
        />
      </div>
      
      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-200">Email Address</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="bg-gray-800/50 border-gray-700 text-white"
        />
      </div>
      
      {/* Age Field */}
      <div className="space-y-2">
        <label htmlFor="age" className="text-sm font-medium text-gray-200">Age</label>
        <Input
          id="age"
          name="age"
          type="number"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleInputChange}
          required
          className="bg-gray-800/50 border-gray-700 text-white"
        />
      </div>
      
      {/* Gender Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-200">Gender</label>
        <div className="grid grid-cols-2 gap-3">
          {["male", "female", "non-binary", "prefer-not-to-say"].map((gender) => (
            <div 
              key={gender}
              className={`
                flex items-center space-x-2 p-3 rounded-md cursor-pointer
                ${formData.gender === gender 
                  ? "bg-purple-600/30 border border-purple-500" 
                  : "bg-gray-800/50 border border-gray-700 hover:border-gray-600"}
              `}
              onClick={() => handleGenderChange(gender)}
            >
              <div 
                className={`w-4 h-4 rounded-full ${formData.gender === gender ? "bg-purple-500" : "bg-gray-600"}`}
              />
              <span className="text-sm capitalize">
                {gender.replace(/-/g, " ")}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Career Profile Selection */}
      <div className="space-y-4">
        <label className="text-sm font-medium text-gray-200">Select Your Career Profile</label>
        <CareerProfileSelector 
          selectedProfile={formData.careerProfile} 
          onProfileSelect={handleProfileSelect} 
        />
      </div>
      
      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        disabled={!formData.name || !formData.email || !formData.age || !formData.gender || !formData.careerProfile}
      >
        Continue to Assessment
      </Button>
    </form>
  )
} 