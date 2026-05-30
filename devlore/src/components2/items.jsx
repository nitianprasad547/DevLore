import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Item({ image, name , ID }) {
    const navigate = useNavigate();
    const [difficulty, setDifficulty] = useState('easy');
    const url =`https://opentdb.com/api.php?amount=10&category=${ID}&difficulty=${difficulty}&type=multiple`;

    return (
        <div className="group overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] hover:-translate-y-2 transition-all duration-500">
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="p-6 flex flex-col gap-5">
                <h2 className="md:h-18 text-3xl font-semibold text-white font-['Newsreader']">
                    {name}
                </h2>
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30"
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Moderate</option>
                    <option value="hard">Difficult</option>
                </select>
                <button onClick={() => navigate("/quiz",{state : {url}})} className="w-full py-3 rounded-xl bg-linear-to-r from-violet-500 to-blue-500 text-white font-semibold hover:from-violet-400 hover:to-blue-400 active:scale-95 transition-all duration-300 shadow-lg">
                    Start Quiz
                </button>
            </div>
        </div>
    );
}
