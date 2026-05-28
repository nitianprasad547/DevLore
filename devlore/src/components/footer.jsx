export default function Footer() {
    return (
        <footer className="relative w-full mt-8 md:mt-32 border-t border-white/10 bg-black/20 backdrop-blur-xl overflow-hidden px-[6%]">
            <div className="grid md:grid-cols-3 gap-12">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-wide font-['Outfit'] mt-4">
                        DevLore
                    </h1>
                    <p className="mt-5 text-slate-300 leading-[180%] text-sm">
                        A futuristic quiz platform designed
                        to challenge minds, improve knowledge,
                        and create immersive learning experiences.
                    </p>
                </div>
                <div>
                    <h2 className=" text-white font-bold text-3xl tracking-wide font-['Outfit'] mt-4">
                        Features
                    </h2>
                    <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                        <p className="text-slate-300">
                            Real-Time Quizzes
                        </p>
                        <p className="text-slate-300">
                            Smart Learning
                        </p>
                        <p className="text-slate-300">
                            Global Rankings
                        </p>
                        <p className="text-slate-300">
                            Modern UI Experience
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className=" text-white font-bold text-3xl mt-4">
                        Connect
                    </h2>
                    <div className="mt-5 flex flex-row justify-between">
                        <a className="text-slate-300 hover:text-violet-400 transition-all duration-300">
                            Instagram
                        </a>
                        <a className="text-slate-300 hover:text-violet-400 transition-all duration-300">
                            Twitter
                        </a>
                        <a className=" text-slate-300 hover:text-violet-400 transition-all duration-300">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex flex-col items-center justify-center text-white gap-3 pb-10">
                <p className="text-sm">
                    © 2026 QuizVerse. All rights reserved.
                </p>
                <p className="text-sm italic">
                    Think. Answer. Win.
                </p>
            </div>
        </footer>
    )
}