import './App.css';
import InjectToken from './Components/InjectToken/InjectToken';
import Navbar from './Components/Navbar/Navbar';
import TokenInfo from './Components/TokenInfo/TokenInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <InjectToken />
      <TokenInfo />
      <TokenInfo whiteOutline={true} />
      <TokenInfo />
    </div>
  );
}

export default App;
