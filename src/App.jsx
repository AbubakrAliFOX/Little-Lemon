import './App.css'

import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/about' element={<div>Dssdad</div>} />
      <Route path='*' element={<ErrorPage />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
