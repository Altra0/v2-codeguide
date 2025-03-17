import OnboardingForm from "../components/onboarding-form"
import { BeamBackground } from "../components/beam-background"

export default function BasicDetailsPage() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background with beams */}
      <BeamBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">Tell us about yourself</h1>
          <p className="text-gray-300 text-center mb-8">Let's personalize your experience based on your profile</p>

          <OnboardingForm />
        </div>
      </div>
    </div>
  )
} 