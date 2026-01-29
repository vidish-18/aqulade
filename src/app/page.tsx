'use client'

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Home(){
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useSpring(x, {stiffness: 150, damping: 20})
  const mouseY = useSpring(y, {stiffness: 150, damping: 20})
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    x.set(mouseXPos / width - 0.5)
    y.set(mouseYPos / height - 0.5)
  }
  
  return(
    <main className="min-h-screen bg-linear-to-r from-[#000000] to-[#050505] flex items-center justify-center p-4 perspective-[1000px]">

      {/* The Card Container */}
      <motion.div
      
      onMouseMove={handleMouseMove}

      onMouseLeave={() => { x.set(0); y.set(0);}}
      
      style={{rotateX, rotateY, transformStyle: "preserve-3d"}}
      className="w-full max-w-2xl border border-zinc-400 bg-linear-to-r from-[#000000] to-[#303030] rounded-2xl p-12 flex flex-col items-center text-center space-y-8 will-change-transform">

        {/* The Logo */}
        <div style={{transform: "translateZ(50px)", transformStyle: "preserve-3d"}}>
        <h2 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] text-5xl font-ahsing tracking-tight lowercase">
          aqulade
        </h2>
        </div>

        {/* The Main Text */}
        <h1 className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-7xl font-horizon leading-none">
            Coming <br />Soon
        </h1>
        

        {/* The Tag Line */}
        <p className="text-lg text-zinc-400 font-light max-w-xs">
          Because everyone deserves to wear thier feelings.
        </p>

        {/* The Button */}
        <div className="space-y-2" style={{transform: "translateZ(50px)", transformStyle: "preserve-3d"}}> 
        <button className="bg-white text-black px-10 py-3 font-medium text-sm rounded-full hover:bg-zinc-200 transition-colors uppercase tracking-widest">
          Notify Me
        </button>
        </div>

      </motion.div>

      {/* Social Icon */}
      <div className="absolute bottom-10">
        <div className="w-8 h-8 border border-white rounded-md flex items-center justify-center">
          <span className="text-white text-sm">IG</span>
        </div>
      </div>
    </main>
  )
}