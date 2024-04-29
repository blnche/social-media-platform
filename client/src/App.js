import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Authentication from './components/Authentication';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <div className="App" style={{marginInline: '1rem'}}>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage />}/>

          <Route path='/authentication' element={<Authentication />}>
            <Route path='/authentication/register' element={<Register />}/>
            <Route path='/authentication/login' element={<Login />}/>
          </Route>

          <Route path='/user-profile' element={<Profile />}> // condition if user !== connected user then show follow & message else show settings & followers numbers
            {/* <Route path='/user-profile/settings' element={<Settings />}/> */}
            {/* <Route path='/user-profile/post' element={<Post />}/> //ajout id dans path ? */}
          </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
