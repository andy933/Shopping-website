import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
