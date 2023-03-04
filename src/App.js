import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/layout/SharedLayout';
import { Home, About, SignUp, LogIn } from './pages';


function App() {
  return (
    <BrowserRouter>
      <div className="text-center">

        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
