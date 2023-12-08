import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import BookingPage from "./components/BookingPage";
import MenuPage from "./components/MenuPage";
import RegisterPage from "./components/RegisterPage";
import Layout from "./components/Layout";
import Profile from './components/Profile';

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
          <Route path="/login" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
