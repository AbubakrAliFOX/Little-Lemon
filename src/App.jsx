import "./App.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";

// import LogInPage from './components/LogInPage';
// import RegisterPage from "./components/RegisterPage";
// import BookingPage from "./components/BookingPage";
// import MenuPage from "./components/MenuPage";
// import Profile from './components/Profile';
const LogInPage = lazy(() => import('./components/LogInPage'));
const RegisterPage = lazy(() => import('./components/RegisterPage'));
const BookingPage = lazy(() => import('./components/BookingPage'));
const MenuPage = lazy(() => import('./components/MenuPage'));
const Profile = lazy(() => import('./components/Profile'));
const Footer = lazy(() => import('./components/Footer'));


const Main = lazy(()=> import('./components/Main'))

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
