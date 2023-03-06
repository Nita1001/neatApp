import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, SignUp, LogIn, Profile, Schedule, NotFound } from './pages';
import SharedLayout from './components/layout/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="text-center">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



