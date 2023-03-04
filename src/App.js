import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, SignUp, LogIn, Profile } from './pages';
import SharedLayout from './components/layout/SharedLayout';
import { LogInProvider } from './contexts/LogInContext';

function App() {
  return (
    <LogInProvider>
      <BrowserRouter>
        <div className="text-center">
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/logIn" element={<LogIn />} />
              <Route path="/profile" element={<Profile />} />

            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </LogInProvider>
  );
}

export default App;



