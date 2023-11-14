import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from './components';
import Preview from './components/Preview';

function App() {
  BrowserRouter;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience/> */}
        <Tech />
        <Works />
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Routes>
        <Route exact path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
