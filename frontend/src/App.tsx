import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { configWeb3Modal } from "./context/Connection";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

configWeb3Modal();

export default function App() {


  return (
    <main className="flex-1 flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </main>
  );
}
