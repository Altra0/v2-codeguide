import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LOCO - Career Alignment & Onboarding System",
  description: "Learn about LOCO's mission to provide AI-powered career guidance and personalized roadmaps for students and professionals.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="space-y-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LOCO</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              LOCO is an AI-powered career alignment and onboarding system designed to help individuals at every stage of their career journey.
            </p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl mb-16">
              <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
              <p className="text-center">
                At LOCO, we believe that everyone deserves access to personalized career guidance that adapts to their unique skills, interests, and aspirations. Our mission is to democratize career development by leveraging artificial intelligence to provide tailored roadmaps and skill-building opportunities.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">How LOCO Works</h2>
            <p className="text-center mb-12">
              LOCO combines advanced AI technology with real-time job market data to create comprehensive career roadmaps. Our platform assesses your current skills and interests, identifies gaps between your profile and ideal candidate profiles, and recommends specific actions to help you achieve your career goals.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl mb-16">
              <h2 className="text-2xl font-semibold mb-4 text-center">Meet CiCi</h2>
              <p className="text-center">
                CiCi is your AI career companion, designed to provide ongoing guidance and support throughout your career journey. From answering questions about different career paths to offering motivational prompts and reminders about upcoming milestones, CiCi is there to help you stay on track and make informed decisions.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">For Everyone</h2>
            <p className="text-center mb-8">
              LOCO serves a diverse range of users, including:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-center">Secondary School Students</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Explore potential career paths and understand which subjects and extracurricular activities align with your interests.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-center">University Students</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Refine your career focus and identify internships, projects, and courses that will enhance your employability.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-center">Career Professionals</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Plan career advancements or transitions with personalized roadmaps that leverage your existing experience.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-center">Parents</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Support your child's career exploration and development with insights and collaborative tools.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4 text-center">Our Commitment to Privacy</h2>
              <p className="text-center">
                LOCO is committed to protecting user privacy, especially for our younger users. We adhere to GDPR, COPPA, and the UK Children's Code to ensure that all data is handled securely and with appropriate parental consent where required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 