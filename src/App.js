import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import RestView from './pages/RestView';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restview' element={<RestView/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;