import photo from '../assets/photo.png';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className="md:max-w-full flex flex-col md:flex-row items-center mx-[2%] md:px-[4%] my-4 py-3 bg-black/20 text-white rounded-3xl backdrop-blur-3xl shadow-xl">
            <div className="flex w-full md:w-[20%] justify-center md:justify-start">
                <h1 className="font-['Newsreader'] text-[32px] text-medium hover:text-cyan-300 hover:bg-white/10 hover:rounded-xl cursor-pointer hover:underline transition">
                    DevLore
                </h1>
            </div>
            <div className='w-[80%] flex flex-row'>
                <div className="w-[75%] items-center flex justify-center font-medium text-[20px] font-serif gap-x-8">
                <Link to="/">
                    <button className="hover:text-cyan-300 hover:bg-white/10 hover:rounded-xl cursor-pointer hover:underline transition">Home</button>
                </Link>
                <Link to="/quests">
                    <button className="hover:text-cyan-300 hover:bg-white/10 hover:rounded-xl cursor-pointer hover:underline transition">Quests</button>
                </Link>
                <Link to="/leaderboard">
                    <button className="hover:text-cyan-300 hover:bg-white/10 hover:rounded-xl cursor-pointer hover:underline transition">Leaderboard</button>
                </Link>
            </div>
            <div className='w-[25%] flex flex-row items-center gap-x-6 font-serif font-medium text-2xl justify-end'>
                <p className='hidden md:block'>Prasad</p>
                <img src={photo} className='w-8 h-8 rounded-2xl'/>
            </div>
            </div>
        </div>
    )
}