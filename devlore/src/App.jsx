import HomePage from './pages/homePage';
import Quests from './pages/quests';
import Quiz from './pages/quiz';

import { Routes, Route} from 'react-router-dom'
export default function App(){
  return(
    <>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="quests" element={<Quests />}/>
      <Route path="quiz" element={<Quiz />} />
    </Routes>
    </>
  )
}