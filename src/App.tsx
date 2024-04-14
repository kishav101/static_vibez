import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeContainer } from './Pages/Home';
import { NavBarContainer } from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBarContainer/>
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/About"  />
      <Route path="/Home"  />
      <Route path="/FQAs" element={<h2>To Build</h2>} />
      <Route path="/Help" element={<h2>To Build</h2>} />
      <Route path="/Login"  />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
