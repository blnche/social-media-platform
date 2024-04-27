import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Authentication from './components/Authentication';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Social Platform</h1>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage />}/>

          <Route path='/authentication' element={<Authentication />}>
            <Route path='/authentication/register' element={<Register />}/>
            <Route path='/authentication/login' element={<Login />}/>
          </Route>

          <Route path='/user-profile' element={<Profile />}> // condition if user !== connected user then show follow & message else show settings & followers numbers
            <Route path='/user-profile/settings' element={<Settings />}/>
            <Route path='/user-profile/post' element={<Post />}/> //ajout id dans path ?
          </Route>

        </Routes>
      </header>
    </div>
  );
}

export default App;
