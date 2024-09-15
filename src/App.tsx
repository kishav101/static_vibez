import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeContainer } from './Pages/Home';
import { NavBarContainer } from './Components/NavBar';
import { FooterComponentContainer } from './Components/FooterComponent';

function App() {
  return (
    <BrowserRouter>
    <NavBarContainer/>
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/About"  />
      <Route path="/Home"  />
      <Route path="/Services" element={<h2>To Build</h2>} />
      <Route path="/Contact" element={<h2>To Build</h2>} />
    </Routes>
    <FooterComponentContainer/>
  </BrowserRouter>
  );
}

export default App;
