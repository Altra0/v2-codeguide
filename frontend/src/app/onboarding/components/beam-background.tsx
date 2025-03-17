"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function BeamBackground() {
  const beamRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!beamRef.current) return
      
      const { clientX, clientY } = e
      const x = clientX / window.innerWidth
      const y = clientY / window.innerHeight
      
      beamRef.current.style.setProperty("--x", `${x}`)
      beamRef.current.style.setProperty("--y", `${y}`)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  
  return (
    <div 
      ref={beamRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        "--x": "0.5",
        "--y": "0.5",
      } as React.CSSProperties}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-transparent blur-3xl" 
          style={{ transform: "translate(calc((var(--x) - 0.5) * 50%), calc((var(--y) - 0.5) * 50%))" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-transparent via-blue-500/20 to-transparent blur-3xl" 
          style={{ transform: "translate(calc((var(--x) - 0.5) * -50%), calc((var(--y) - 0.5) * -50%))" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-transparent via-transparent to-pink-500/20 blur-3xl" 
          style={{ transform: "translate(calc((var(--x) - 0.5) * 30%), calc((var(--y) - 0.5) * 30%))" }}
        />
      </motion.div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
    </div>
  )
} 