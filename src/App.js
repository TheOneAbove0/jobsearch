
import './App.css';
import Job from './Components/JobsDiv/job';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/SearchDiv/Search';
import Value from './Components/ValueDiv/Value';
import Footer from './Components/FooterDiv/Footer';


function App() {
  return (
    <div className=" w-[85%] m-auto bg-white ">
     <NavBar />
      <Search />
     <Job />
    <Value />
    <Footer />
    </div>
  );
}

export default App;
