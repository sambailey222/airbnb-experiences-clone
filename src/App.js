import './App.css';
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import Data from './data.js'

function App() {

  const cards = Data.map((item, index) =>
    <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
  );

  console.log(cards);

  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      {/* <Card img='../katie.png' rating="5.0" reviewCount={6} country="USA" title="Life lessons with Katie Zaferes" price={136}/> */}
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
