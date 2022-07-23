import Navbar from './componentes/Navbar/Navbar';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer saludo="Hola mundo"/>
    </div>
  );
}

export default App;
