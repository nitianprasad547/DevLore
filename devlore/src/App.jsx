import HomePage from './pages/homePage';
import Quests from './pages/quests';
import LeaderBoard from './pages/leaderboard';

import { Routes, Route} from 'react-router-dom'
export default function App(){
  return(
    <>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="quests" element={<Quests />}/>
      <Route path="leaderboard" element={<LeaderBoard />} />
    </Routes>
    </>
  )
}