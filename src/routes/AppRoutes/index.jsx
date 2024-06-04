import {Routes, Route} from 'react-router-dom'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import ProjectInfo from '../../pages/ProjectInfo'
import NotFound from '../../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<ProjectInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}