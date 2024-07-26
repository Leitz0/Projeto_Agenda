import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateContact from './pages/CreateContact';
import ListContacts from './pages/ListContacts';
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContextType";
import VLibras from "vlibras-nextjs"; 
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <VLibras forceOnload />
       <div className="bg-image"></div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListContacts />} />
          <Route path="/create" element={<CreateContact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
