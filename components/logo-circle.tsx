'use client'

export default function LogoCircle() {
  return (
    <div className="relative w-64 h-64 card-float">
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-green-500 to-green-700 border-8 border-white/60 overflow-hidden flex items-center justify-center shadow-2xl transition-all duration-300 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Mountain lines decoration */}
          <div className="flex gap-1 mb-2">
            <svg className="w-12 h-6 text-white/80" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M 10 40 Q 30 20, 50 25 T 90 35" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 15 45 Q 35 30, 55 35 T 85 40" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          {/* Text */}
          <div className="text-center px-8">
            <p className="text-white font-black text-3xl leading-tight tracking-tight">Cayumanque</p>
            <p className="text-white/95 font-bold text-lg mt-2">Diseño</p>
          </div>
          
          {/* Decorative line */}
          <div className="mt-2 flex gap-1">
            <div className="w-1 h-1 rounded-full bg-white/70" />
            <div className="w-8 h-0.5 bg-white/70 rounded" />
            <div className="w-1 h-1 rounded-full bg-white/70" />
          </div>
        </div>
      </div>
    </div>
  )
}
