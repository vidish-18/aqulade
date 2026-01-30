// Using client cuz the site uses 3D components which needs mouse inputs from the user
'use client'

// Importing libraries and tools which help with the 3D rendering 
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

// The home function which returns the actual page elements and code of JSX and CSS
export default function Home() {

  // Calculations to know where exactly the mouse is hovering and adding 3D interactivity
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])

  // Calculations for the glowing affect as the mouse hovers
  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)


  // Function which uses the above calculations to add interactivity of the site with the hovering of the mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    x.set(mouseXPos / width - 0.5)
    y.set(mouseYPos / height - 0.5)

    glowX.set(mouseXPos)
    glowY.set(mouseYPos)
  }

  // The JSX (HTML) code being sent to the user 
  return (
    <main className="min-h-screen bg-linear-to-r from-[#000000] to-[#050505] flex items-center justify-center p-4 perspective-distant overflow-hidden">

      {/* The Card Container */}
      <motion.div

        // When the mouse moves on the card the card interacts with the help of the function defined above and when the mouse leaves the card comes back to the normal state
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}

        // Styling applied to the card for the way it looks and to make it a 3D component
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full max-w-2xl border border-zinc-400 bg-linear-to-r from-[#000000] to-[#303030] rounded-2xl p-12 flex flex-col items-center text-center space-y-8 will-change-transform relative group">

        <motion.div
          className="pointer-events-none absolute w-full h-full inset-px opacity-0 rounded-2xl group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: useMotionTemplate`radial-gradient(500px circle at ${glowX}px ${glowY}px, rgba(75,75,255,0.2), transparent 70%)` }}
        ></motion.div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-8" style={{ transformStyle: "preserve-3d" }}>
          {/* The Logo */}
          {/* This is the actual aqulade logo */}
          <div style={{ transform: "translateZ(100px)", transformStyle: "preserve-3d" }}>
            <h2 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] text-5xl font-ahsing tracking-tight lowercase">
              aqulade
            </h2>
          </div>

          {/* The Main Text */}
          {/* This is the coming soon text */}
          <h1 className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-7xl font-horizon leading-none">
            Coming <br />Soon
          </h1>

          {/* The Tag Line */}
          {/* This line will prolly be changed soon */}
          <p className="text-lg text-zinc-400 font-light max-w-xs">
            Because everyone deserves to wear thier feelings.
          </p>

          {/* The Button */}
          {/* The button which will help you notify and give your emails to us which we will use very kindly to help you (or will we?) */}
          <div className="space-y-2" style={{ transform: "translateZ(100px)", transformStyle: "preserve-3d" }}>
            <button className="bg-white text-black px-10 py-3 font-medium text-sm rounded-full hover:bg-zinc-200 transition-colors uppercase tracking-widest">
              Notify Me
            </button>
          </div>
        </div>

      </motion.div>

      {/* Social Icon */}
      {/* This is the code for the instagram icon which we made on spot using vectors and stuff */}
      {/* Motion div adds interactivity to the icon */}
      <div className="absolute bottom-10 w-8 h-8 origin-center group">

        {/* Tag that helps redirect users to instagram */}
        <a href="https://instagram.com/aqulade" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full origin-center">

          {/* The big block of doom which helps generate the actual insta logo */}
          <svg viewBox="0 0 24 24" className=" fill-zinc-300 group-hover:fill-red-500 transition-all duration-300" style={{ transform: "translateZ(30px)" }}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.066.935 20.397.333 19.63.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      </div>
    </main>
  )
}

// And the end :) Now we just have to add the interaction of like, when the user clicks on notify me they actually get a way to log in and give thier emails, because till now only the front end has been coded. Well most of it I would say.