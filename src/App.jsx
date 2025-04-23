import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componants/Header.jsx';
import Portfolio from './pages/Portfolio.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path="/home" element={<HomePage />} />  */}
          <Route path="/" element={<Portfolio />} /> 
        </Routes>
    </BrowserRouter>
  );
}