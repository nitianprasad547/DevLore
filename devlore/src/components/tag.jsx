import {Link} from 'react-router-dom'
export default function Tag(){
    return(
        <div className="w-full justify-center items-center h-70 md:h-100 flex font-['Newsreader'] font-medium text-white shadow-2xl backdrop-blur-3xl flex-col" >
            <h1 className="text-3xl md:text-6xl pl-5 md:pl-0">Challenge your <span className="italic">mind.</span> Unlock your <span className="italic">potential.</span></h1>
            <Link to="/quests">
                <button className="text-3xl border px-8 py-4 mt-8 rounded-3xl italic bg-black/30 items-center border-[#E6E6E6 cursor-pointer">Challenge Yourself</button>
            </Link>
        </div>
    )
}