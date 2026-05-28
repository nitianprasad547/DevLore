export default function About() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">

      <div className="absolute top-0 left-0 w-125 h-125 bg-violet-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 uppercase tracking-[3px] text-sm font-semibold">
            About The Platform
          </p>
          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-white leading-tight">
            A Modern Quiz Experience Designed For Curious Minds.
          </h1>
          <p className="mt-6 text-slate-300 text-lg leading-[180%] max-w-xl">
            Challenge yourself with immersive quizzes, real-time competition, and a futuristic learning experience crafted to sharpen your knowledge and push your limits.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <button className="px-7 py-4 rounded-2xl bg-violet-500 hover:bg-violet-400 active:scale-95 transition-all duration-300 text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              Start Quiz
            </button>
            <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300 text-slate-200 font-medium">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-10 shadow-2xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-white text-2xl font-semibold">
                Real-Time Competition
              </h2>
              <p className="mt-3 text-slate-300 leading-[170%]">
                Compete with players worldwide and climb the leaderboard through fast-paced quiz battles.
              </p>
            </div>
            <div>
              <h2 className="text-white text-2xl font-semibold">
                Smart Learning
              </h2>
              <p className="mt-3 text-slate-300 leading-[170%]">
                Explore multiple categories designed to improve knowledge, memory, and speed.
              </p>
            </div>
            <div>
              <h2 className="text-white text-2xl font-semibold">
                Modern Experience
              </h2>
              <p className="mt-3 text-slate-300 leading-[170%]">
                Built with futuristic UI, smooth animations, and an immersive premium design system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}