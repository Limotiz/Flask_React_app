import Layout from './components/Layout'
import AddStudent from './pages/AddStudent'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster 
        position='top-right'
        reverseOrder={false}
        />
    </BrowserRouter>
  )
}

export default App