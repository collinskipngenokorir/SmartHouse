import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/about';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';

export default function App(){
  return(  <BrowserRouter>
  <Header/>
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/sign-in' element={<Signin />} />
     <Route path='/sign-up' element={<Signup />} />
     <Route path='/about' element={<About />} />
     <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-listing' element={<CreateListing/>} />
     </Route>
    </Routes>  
  </BrowserRouter>
  );
} 