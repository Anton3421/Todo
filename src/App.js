import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
     <HeaderComponent />
     <Todolist />
    </div>
  );
}

export default App;
