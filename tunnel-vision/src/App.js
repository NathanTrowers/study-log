import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import AppRoutes from './Components/Routes/AppRoutes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppRoutes />
      </header>
      <Footer />
    </div>
  );
}

export default App;
