import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import BookingPage from "./components/BookingPage";
import MenuPage from "./components/MenuPage";
import LogInPage from './components/LogInPage';
import Layout from "./components/Layout";
import Profile from './components/Profile';
import { ToastContainer } from "react-toastify";

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
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
