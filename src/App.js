import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const links = ["Productos", "Medidas", "Contacto"]


  return (
    <>
      <NavBar links={links} />
      <ItemListContainer saludo={" ¡Hola👋! "} />
    </>
  );
}

export default App;
