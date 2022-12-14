import './App.css';
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import Data from './data.js'

function App() {

  const cards = Data.map((item, index) =>
    <Card
        key={item.id}
        item={item}
      />
  );

  console.log(cards);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
