import './App.css';
// import { render } from "react-dom";
import { ColorPage } from './pages/colorpage';
import { Forms } from './pages/forms';
import { Routes, Route, } from "react-router-dom";
import { Header } from './components/header/'


function App() {
  return (
    <div className="root">
      <Header />
      <Routes>
        <Route path="/" element={<Forms/>}></Route>
        <Route path="/palette" element={<ColorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
