
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';
import './app.css';


function App() {
  return (
    <>
   <>
    <Header />
    </>
  <br>
  </br>
      <Nav />
     
      <main className="mx-3">
        <Outlet />
      </main>

      <>
     <Footer />
     </>
    </>
  );
}




export default App;
