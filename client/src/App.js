import './Style/App.css';
import Home from "./pages/home/Home";
import List from './components/Comp_List.jsx';
import Questions from './components/Comp_qns.jsx';
import company from './companylist.json'
import Calendar from "./pages/calendar/Calendar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login.jsx";
import TypingPractice from "./pages/typingPractice/TypingPractice";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from './context/AuthContext'

function App() {

  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={user ? <Navigate path="/" /> : <Register />} />
            <Route path="login" element={user ? <Navigate path="/" /> : <Login />} />
            <Route path="typing" element={<TypingPractice />} />
            <Route path='calendar' element={<Calendar />} />
            <Route exact path='List' element={<List />} />
          </Route>
          <Route exact path='questions/:id' element={<Questions />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
