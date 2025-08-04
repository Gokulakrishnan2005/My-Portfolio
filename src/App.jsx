import { BrowserRouter, Routes, Route } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import Header from './componants/Header.jsx'; // eslint-disable-line no-unused-vars
import Portfolio from './pages/Portfolio.jsx'; // eslint-disable-line no-unused-vars
import BlogList from './pages/BlogList.jsx'; // eslint-disable-line no-unused-vars
import BlogPostDetail from './pages/BlogPostDetail.jsx'; // eslint-disable-line no-unused-vars

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
        </Routes>
    </BrowserRouter>
  );
}