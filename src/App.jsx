import './App.css'

import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import BookingPage from './components/BookingPage';
import MenuPage from './components/MenuPage';

function App() {

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/about' element={<div>Dssdad</div>} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/reservations' element={<BookingPage />} />
      <Route path='*' element={<ErrorPage />} />
     </Routes>
     {/* <Footer /> */}
    </>
  )
}

export default App
