import './App.css';
import Container from './components/container';
import BurgerList from './components/burger-list';

function App() {
  return (
    <div className="bg-orange-500 h-screen">
      <Container>
        <h1 className='text-center text-white text-3xl font-extrabold py-10'>Burger Menu</h1>
        <BurgerList />
      </Container>
    </div>
  );
}

export default App;
