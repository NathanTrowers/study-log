import logo from './logo.svg';
import './App.css';
import AppRoutes from './Components/Routing/AppRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
