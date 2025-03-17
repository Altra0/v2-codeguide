"use client"

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Briefcase, GraduationCap, LineChart, Users } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/nextjs";

export default function HomePage() {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  
  // Career paths data array
  const careerPaths = [
    {
      title: "Student",
      description: "Explore potential career paths and understand which subjects align with your interests",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      path: "/student"
    },
    {
      title: "Graduate",
      description: "Navigate the transition from education to employment with tailored job search strategies",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      path: "/graduate"
    },
    {
      title: "Professional",
      description: "Plan career advancements or transitions with roadmaps that leverage your experience",
      icon: Briefcase,
      color: "from-pink-500 to-pink-600",
      path: "/professional"
    },
    {
      title: "Leader",
      description: "Develop leadership skills and strategies to guide teams and organizations effectively",
      icon: LineChart,
      color: "from-amber-500 to-amber-600",
      path: "/leader"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 pt-20 pb-16 md:pt-32 md:pb-24 text-center w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            Your Complete <span className="text-blue-600">Career Ecosystem</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            LOCO guides you through every stage of your career journey with AI-powered insights, personalized roadmaps, and skill-building opportunities.
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <SignUpButton mode="modal">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 h-auto">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignUpButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Career Paths Section */}
      <section className="px-4 py-16 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Evolving Career Path</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            No matter where you are in your journey, LOCO provides tailored guidance for your specific needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredPath(path.path)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${path.color}`}></div>
              <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${path.color} text-white mb-4`}>
                <path.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>
              <Link href={path.path} className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestone Progress Preview */}
      <section className="px-4 py-16 bg-gray-900 text-white w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Track Your Progress Across Your Entire Career</h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden border border-gray-800 bg-black/40 backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h3 className="text-xl font-semibold">Your Career Milestone Progress</h3>
              <Link href="/career-journey">
                <Button variant="outline" className="mt-4 md:mt-0 border-gray-600 text-white hover:bg-gray-800">
                  View Full Journey
                </Button>
              </Link>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-800 rounded-full h-4 mb-8">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-4 rounded-full"
              ></motion.div>
            </div>
            
            {/* Career stages */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {["Student", "Graduate", "Professional", "Leader"].map((stage, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  className={`rounded-lg border ${index === 0 ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700 bg-gray-800/50'} p-4 text-center`}
                >
                  <div className="text-sm uppercase tracking-wider mb-1">{stage}</div>
                  <div className="font-semibold">{index === 0 ? 'In Progress' : 'Upcoming'}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 text-center w-full bg-blue-600 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of others who are navigating their career path with LOCO
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SignUpButton mode="modal">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg h-auto">
                Get Started Now
              </Button>
            </SignUpButton>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
} 