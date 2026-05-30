import Item from "./items";
import maths from '../subPic/maths.jpeg';
import books from '../subPic/books.avif';
import computers from '../subPic/computers.jpg';
import geo from '../subPic/geography.jpg';
import gk from '../subPic/gk.avif';
import history from '../subPic/history.jpg';
import movies from '../subPic/movies.jpg';
import polity from '../subPic/polity.jpg';
import science from '../subPic/Science.jpeg';
import sports from '../subPic/sports.avif';
import videogame from '../subPic/videogame.avif';
import art from '../subPic/art.webp';

export default function Body() {
    return (
        <div className="flex flex-col">
            <div className="font-['Newsreader'] text-3xl text-white px-[6.667%] pt-5 justify-center flex">
                <h1>Select Your Next Quest</h1>
            </div>
            <div className="grid md:grid-cols-4 px-[6.667%] pt-5 gap-8 mb-20">
                <Item
                    image={maths}
                    name="Mathematics"
                    ID="19"
                />
                <Item
                    image={computers}
                    name="Computers"
                    ID="18"
                />
                <Item
                    image={geo}
                    name="Geography"
                    ID="22"
                />
                <Item
                    image={history}
                    name="History"
                    ID="23"
                />
                <Item
                    image={books}
                    name="Entertainment : Books"
                    ID="10"
                />
                <Item
                    image={movies}
                    name="Entertainment : Movies"
                    ID="11"
                />
                <Item
                    image={sports}
                    name="Entertainment : Sports"
                    ID="21"
                />
                <Item
                    image={videogame}
                    name="Entertainment : VideoGames"
                    ID="15"
                />
                <Item
                    image={gk}
                    name="General Knowledge"
                    ID="9"
                />
                <Item
                    image={polity}
                    name="Politics"
                    ID="24"
                />
                <Item
                    image={science}
                    name="Science"
                    ID="17"
                />
                <Item
                    image={art}
                    name="Art"
                    ID="25"
                />
            </div>
        </div>
    )
}