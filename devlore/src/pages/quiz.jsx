import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const { state } = useLocation();
    const navigate = useNavigate();
    const url = state ? state.url : null;

    useEffect(() => {
        if (!url) return;
        axios.get(url).then((res) => {
            setQuestions(res.data.results || []);
        });
    }, [url]);

    const question = questions[current];
    const answers = useMemo(() => {
        if (!question) return [];
        return [
            ...question.incorrect_answers,
            question.correct_answer,
        ].sort(() => Math.random() - 0.5);
    }, [question]);

    if (!url) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white gap-6 bg-black">
                <h1 className="text-3xl font-bold font-['Newsreader']">No Quest Selected</h1>
                <button
                    className="px-6 py-3 bg-linear-to-r from-violet-500 to-blue-500 text-white font-semibold rounded-xl hover:from-violet-400 hover:to-blue-400 active:scale-95 transition-all"
                    onClick={() => navigate("/quests")}
                >
                    Choose a Quest
                </button>
            </div>
        );
    }

    if (!questions.length) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white text-2xl">
                Loading Quiz...
            </div>
        );
    }

    if (current >= questions.length) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6 flex-col gap-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center text-white">
                    <h1 className="text-5xl font-bold">Quiz Completed 🎉</h1>
                    <p className="mt-6 text-2xl">
                        Score: {score} / {questions.length}
                    </p>
                </div>
                <div>
                    <button
                        className="px-6 py-2 bg-white/10 text-white font-['Newsreader'] text-3xl font-bold rounded-2xl"
                        onClick={() => navigate("/quests")}
                    >Restart</button>
                </div>
            </div>
        );
    }

    const question = questions[current];
    const answers = useMemo(() => {
        if (!question) return [];
        return [
            ...question.incorrect_answers,
            question.correct_answer,
        ].sort(() => Math.random() - 0.5);
    }, [question]);
    const progress =
        ((current + 1) / questions.length) * 100;
    const handleAnswer = (answer) => {
        setSelected(answer);
        setTimeout(() => {
            if (answer === question.correct_answer) {
                setScore((prev) => prev + 1);
            }
            setCurrent((prev) => prev + 1);
            setSelected(null);
        }, 800);
    };
    return (

        <div className="min-h-screen flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        <p className="text-slate-300">
                            Question {current + 1}/{questions.length}
                        </p>
                        <p className="text-cyan-400">
                            {Math.round(progress)}%
                        </p>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-linear-to-r from-violet-500 to-cyan-500 transition-all duration-500"
                            style={{ width: `${progress}%`, }}
                        />
                    </div>
                </div>
                <h1
                    className="text-3xl text-white font-semibold leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: question.question, }}
                />
                <div className="grid md:grid-cols-2 gap-4 mt-10">
                    {answers.map((answer) => (
                        <button
                            key={answer}
                            onClick={() => handleAnswer(answer)}
                            disabled={selected}
                            className="p-4 rounded-2xl bg-black/20 border border-white/10 text-white hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-300"
                            dangerouslySetInnerHTML={{ __html: answer, }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}