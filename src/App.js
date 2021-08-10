import logo from './logo.svg';
import config from './config.json'
import './App.css';
import Header from './components/Header';

//Inspiration sites
//https://www.serioverify.com/
//https://waaark.com/
//http://trydo.rainbowit.net/dark-main-demo
//http://trydo.rainbowit.net/portfolio-home

function App() {
  return (
    <div className="App">
        <Header nav={config.nav} />
    </div>
  );
}

export default App;
